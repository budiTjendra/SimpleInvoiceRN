import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button , TouchableWithoutFeedback, TextInput, ScrollView, VirtualizedList} from 'react-native';
import InvoiceItem from './InvoiceItem';
import Header from './Header';
import InvoiceListContext from './InvoiceListContext';
import {sortType} from './Constants'
import Footer from './Footer';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		invoiceId: "643",
		merchantId: "M1",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		invoiceId: "644",
		merchantId: "M2",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d721',
		title: 'Third Item',
		invoiceId: "645",
		merchantId: "M2",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
		title: 'First Item',
		invoiceId: "646",
		merchantId: "M2",
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
		merchantId: "M2",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d724',
		title: 'Third Item',
		invoiceId: "648",
		merchantId: "M2",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
		title: 'First Item',
		invoiceId: "649",
		merchantId: "M2",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
		title: 'Second Item',
		invoiceId: "650",
		merchantId: "M2",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d727',
		title: 'Last Item',
		invoiceId: "651",
		merchantId: "M2",
		transactionDate: "2020-05-29",
		dueDate: "2020-05-30",
		totalTax: 0.00,
		totalAmount: 320.00,
		balanceAmount: 320.00
	},
];

const initialState = {data: DATA}

function reducer(state, action) {
	switch (action.type) {
		case sortType.invoiceID:
			console.log('sort by invoiceID')
			return state;
		case sortType.transactionDate:
			console.log('sort by transactionDate')
			return state;
		case sortType.totalTax:
			console.log('sort by totalTax')
			return state;
		case sortType.totalAmount:
			console.log('sort by totalAmount')
			return state;

		default:
			return state;
	}
}

const filterType = {
	allHistory: "all_history",
	aMonthAgo: "a_month_ago",
	aWeekAgo: "a_week_ago"
}

Object.freeze(filterType)

const InvoiceList = ({navigation}) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const performSorting = () => {
		console.log('perform Sorting')
	}

	const {
		data
	} = state;

	return (
		  <InvoiceListContext.Provider value={{
		  	state, dispatch
			}}>
				<SafeAreaView style={styles.container}>
					<Header/>
					<FlatList
						data={data}
						renderItem={({ item }) => <InvoiceItem data={item}/>}
						keyExtractor={item => item.id}
					/>
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
