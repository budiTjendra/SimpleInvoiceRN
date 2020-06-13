import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button , TouchableWithoutFeedback, TextInput, ScrollView, VirtualizedList} from 'react-native';
import InvoiceItem from './InvoiceItem';
import Header from './Header';
import InvoiceListContext from './InvoiceListContext';
import {sortType, filterType} from './Constants'
import Footer from './Footer';
import produce from "immer"
import _ from "underscore"
import * as services from '../../Services';
import { useSelector, useDispatch as useDispatchRedux } from 'react-redux'
import * as actions from './../../Redux/Actions'
import * as TimeFrameHelper from './TimeFrameHelper'


const actionType = {
	...sortType,
	updateData: "update_data"
}


const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		invoiceId: "700",
		merchantId: "M1",
		transactionDate: "2020-05-01",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 100.00,
		balanceAmount: 320.00
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		invoiceId: "644",
		merchantId: "M2",
		transactionDate: "2020-05-08",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 500.00,
		balanceAmount: 320.00
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d721',
		title: 'Third Item',
		invoiceId: "645",
		merchantId: "M3",
		transactionDate: "2020-05-02",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 1000.00,
		balanceAmount: 320.00
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
		title: 'First Item',
		invoiceId: "646",
		merchantId: "M4",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
		title: 'Second Item',
		invoiceId: "647",
		merchantId: "M5",
		transactionDate: "2020-05-03",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 60.00,
		balanceAmount: 320.00
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d724',
		title: 'Third Item',
		invoiceId: "648",
		merchantId: "M6",
		transactionDate: "2020-05-05",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 70.00,
		balanceAmount: 320.00
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
		title: 'First Item',
		invoiceId: "649",
		merchantId: "M7",
		transactionDate: "2020-05-04",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 5.00,
		balanceAmount: 320.00
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
		title: 'Second Item',
		invoiceId: "650",
		merchantId: "M8",
		transactionDate: "2020-05-06",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 600.00,
		balanceAmount: 320.00
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d727',
		title: 'Last Item',
		invoiceId: "651",
		merchantId: "M9",
		transactionDate: "2020-05-07",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
];

const initialState = {data: DATA}

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
		const fetchInvoices = (token) => {
			const entireHistory = TimeFrameHelper.EntireHistory();
			const resp = services.getInvoices({
				token,
				fromDate: entireHistory.startDate,
				toDate: entireHistory.endDate,
				merchantReference: 7066823
			});
			return resp;
		}

		//get access token, then fetch list
		new Promise((resolve, reject) =>{
			const resp = services.getAccessToken()
			resolve(resp)
		})
			.catch(resp => console.error('error in get AccessToken', {resp}))
			.then(resp => resp.data)
			.then(data => {
				dispatchRedux(actions.setToken(data))
				const resp = fetchInvoices(data.access_token)
				return resp;
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
