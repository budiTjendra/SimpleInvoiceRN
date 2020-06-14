import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button , TouchableWithoutFeedback, TextInput, ScrollView, VirtualizedList} from 'react-native';
import InvoiceItem from './InvoiceItem';
import Header from './Header';
import InvoiceListContext from './InvoiceListContext';
import {sortType, actionType} from './Constants'
import Footer from './Footer';
import produce from "immer"
import _ from "underscore"
import * as services from '../../Services';
import { useSelector, useDispatch as useDispatchRedux } from 'react-redux'
import * as actions from './../../Redux/Actions'
import * as TimeFrameHelper from './TimeFrameHelper'

const initialState = {data: []}

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
					currency: item.currency
				}
			})
			draft.data = newData
			break;
		default:
			break;
	}
}

const curriedReducerFunction = produce(reducerFunction);

const InvoiceList = ({navigation}) => {
	const [state, dispatch] = React.useReducer(curriedReducerFunction, initialState);
	const dispatchRedux = useDispatchRedux();

	React.useEffect(()=>{

		const fetchInvoices = async (token) => {
			const entireHistory = TimeFrameHelper.EntireHistory();
			const resp = await services.getInvoices({
				token,
				fromDate: entireHistory.startDate,
				toDate: entireHistory.endDate,
				merchantReference: 7066823
			});
			return resp
		}

		//get access token, then fetch list
		services.getAccessToken()
			.catch(resp => console.error('error in get AccessToken', {resp}))
			.then(resp => {
				return  resp.data
			})
			.then(data => {
				dispatchRedux(actions.setToken(data))
				return fetchInvoices(data.access_token);
		})
			.catch(resp => console.error('error in fetchInvoices', {resp}))
			.then (resp => resp.data)
			.then(data => {
				console.log('update data', data.length)
				dispatch({
					type: actionType.updateData,
					payload: data
				})
			})
		
	},[])

	const {
		data
	} = state;

	return (
		  <InvoiceListContext.Provider value={{
		  	state, dispatch
			}}>
				<SafeAreaView style={styles.container}>
					{/* contains search bar */}
					<Header/>

					<FlatList
						data={data}
						renderItem={({ item }) => <InvoiceItem data={item}/>}
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
