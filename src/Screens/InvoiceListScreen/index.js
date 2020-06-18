// @flow
import React from 'react';
import {
	SafeAreaView,
	FlatList,
	StyleSheet,
} from 'react-native';
import InvoiceItem from './InvoiceItem';
import Header from './Header';
import InvoiceListContext from './InvoiceListContext';
import { actionType} from './Constants'
import Footer from './Footer';
import produce from "immer"
import _ from 'underscore'
import * as services from '../../Services';
import { useSelector, useDispatch as useDispatchRedux } from 'react-redux'
import * as actions from './../../Redux/Actions'
import * as TimeFrameHelper from './TimeFrameHelper'
import * as settings from '../../Settings'
import * as helper from './../../Helper';

const entireHistory = TimeFrameHelper.EntireHistory();

const initialState = {
	data: [],
	//$FlowFixMe
	startDate: entireHistory.startDate,
	endDate: entireHistory.endDate,
}

function reducerFunction(draft, action) {
	// reducer code goes here.
	switch (action.type) {
		case actionType.invoiceID:
			draft.data =  _.sortBy(action.payload.data,"invoiceId")
			break;
		case actionType.transactionDate:
			draft.data =  _.sortBy(action.payload.data,"transactionDate")
			break;
		case actionType.totalTax:
			draft.data = _.sortBy(action.payload.data,"totalTax").reverse() //desc
			break;
		case actionType.totalAmount:
			draft.data =  _.sortBy(action.payload.data,"totalAmount").reverse() //desc
			break;
		case actionType.balanceAmount:
			draft.data =  _.sortBy(action.payload.data,"balanceAmount").reverse() //desc
			break;
		case actionType.updateData:
			const newData = action.payload.data.map( item => {
				return {
					invoiceId: item.invoiceId,
					merchantId: item.merchantId,
					transactionDate: item.transactionDate,
					dueDate: item.dueDate,
					totalTax: item.totalTax,
					totalAmount: item.totalAmount,
					balanceAmount: item.balanceAmount,
					currency: item.currency,
				}
			})
			draft.data = newData
			break;
		case actionType.allHistory:
			draft.startDate = entireHistory.startDate
			draft.endDate = entireHistory.endDate
			break;
		case actionType.aMonthAgo:
			const aMonthAgo = TimeFrameHelper.LastMonth();
			draft.startDate = aMonthAgo.startDate
			draft.endDate = aMonthAgo.endDate
			break;
		case actionType.aWeekAgo:
			const aWeekAgo = TimeFrameHelper.LastWeek();
			draft.startDate = aWeekAgo.startDate
			draft.endDate = aWeekAgo.endDate
			break;
		case actionType.yearToDate:
			const yearToDate = TimeFrameHelper.YearToDate()
			draft.startDate = yearToDate.startDate
			draft.endDate = yearToDate.endDate
			break;
		default:
			break;
	}
}

const curriedReducerFunction = produce(reducerFunction);

type Props = {
	navigation: Object
}

const InvoiceList = ({navigation}: Props) => {
	const [state, dispatch] = React.useReducer(curriedReducerFunction, initialState);
	const dispatchRedux = useDispatchRedux();
	const authenticationState = useSelector(state => state.authenticationReducer)
	const [searchText, onChangeSearchText] = React.useState(settings.defaultSearchText);

	React.useEffect(()=>{
		//get access token, then fetch list
		services.getAccessToken()
			.catch(resp => console.error('error in get AccessToken', {resp}))
			.then(resp => {
				return  resp.data
			})
			.then(data => {
				dispatchRedux(actions.setToken(data))
				return services.getInvoices({
					token: data.access_token,
					fromDate: state.startDate,
					toDate: state.endDate,
					merchantReference: settings.defaultSearchText,
				});
		})
			.catch(resp => console.error('error in fetchInvoices', {resp}))
			.then (resp => resp.data)
			.then(data => {
				dispatch({
					type: actionType.updateData,
					payload: data
				})
			})

	},[])

	React.useEffect(()=>{
		if (authenticationState.accessToken !== undefined){
			performSearch()
		}
	},[state.startDate, state.endDate])


	const performSearch =  () => {
		const {
			accessToken: {access_token}
		} = authenticationState

		services.getInvoices({
			token: access_token,
			fromDate: state.startDate,
			toDate: state.endDate,
			merchantReference: searchText,
		})
			.catch(e => {
				helper.showMessage("record not found");
				console.log('error in getInvoices()', e)
			})
			.then(resp => {
				const {
					data
				} = resp.data

				helper.showMessage(`${data.length} records found`);

				dispatch({
					type: actionType.updateData,
					payload: resp.data
				})
			});
	}

	const {
		data
	} = state;


	return (
		  <InvoiceListContext.Provider value={{
		  	state,
				dispatch ,
				performSearch,
				searchText,
				onChangeSearchText
			}}>
				<SafeAreaView style={styles.container}>
					{/* contains search bar */}
					<Header/>
					<FlatList
						testID={"invoiceListScreen_list"}
						data={data}
						renderItem={({ item }) => <InvoiceItem data={item} />}
						keyExtractor={item => item.invoiceId}
					/>

					{/* contains buttons */}
					<Footer navigation={navigation}/>
				</SafeAreaView>
			</InvoiceListContext.Provider>
	);
}

export default InvoiceList

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonTitle:{
		color: 'white'
	},
});
