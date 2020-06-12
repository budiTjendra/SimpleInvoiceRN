import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button , TouchableWithoutFeedback, TextInput, ScrollView} from 'react-native';
import AppButton from '../../Components/AppButton';
import InvoiceItem from './InvoiceItem';
import {ScreenName} from '../../Constants'
import Header from './Header';

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

const sortType = {
	invoiceID: "invoice_id",
	transactionDate: "transaction_date",
	totalTax: "total_tax",
	totalAmount: "total_amount"
}

Object.freeze(sortType)

const InvoiceList = ({navigation}) => {
	const [showFilterSelectionUI, onShowFilterSelectionUI] = React.useState(false);
	const [showSortSelectionUI, onShowSortSelectionUI] = React.useState(false);

	const [state, dispatch] = React.useReducer(reducer, initialState);

	const performSorting = () => {
		console.log('perform Sorting')
	}

	const onGoToCreateInvoiceScreen = () => {
		onShowSortSelectionUI(false)
		onShowFilterSelectionUI(false)

		navigation.navigate(ScreenName.createInvoice)
	}

	const filterByAllHistory = () => {
		console.log('filterByAllHistory')
	}

	const filterByOneMonthAgo = () => {
		console.log('filterByOneMonthAgo')
	}

	const filterByOneWeekAgo = () => {
		console.log('filterByOneWeekAgo')
	}

	const FilterSelection = () => {
		return (
			<View style={styles.selectionPanel}>
				<Button title={"All History"} onPress={filterByAllHistory}/>
				<Button title={"A Month Ago"} onPress={filterByOneMonthAgo}/>
				<Button title={"All History"} onPress={filterByOneWeekAgo}/>
			</View>
		)
	}


	const sortByInvoiceId = () => {
		dispatch({ type: sortType.invoiceID})
	}

	const sortByTransactionDate = () => {
		dispatch({ type: sortType.transactionDate})
	}

	const sortByTotalTax = () => {
		dispatch( { type: sortType.totalTax})
	}

	const sortByTotalAmount = () => {
		dispatch( { type: sortType.totalAmount})
	}


	const SortSelection = () => {
		return (
			<View style={styles.selectionPanel}>
				<Button title={"Invoice ID"} onPress={sortByInvoiceId}/>
				<Button title={"Transaction Date"} onPress={sortByTransactionDate}/>
				<Button title={"Total Tax"} onPress={sortByTotalTax}/>
				<Button title={"Total Amount"} onPress={sortByTotalAmount}/>
			</View>
		)
	}

	const onSortButtonPressed = () => {
		onShowSortSelectionUI(!showSortSelectionUI)
		onShowFilterSelectionUI(false)
	}

	const onFilterButtonPressed = () => {
		onShowFilterSelectionUI(!showFilterSelectionUI)
		onShowSortSelectionUI(false)
	}

	const {
		data
	} = state;

	return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Header/>
					<FlatList
						data={data}
						renderItem={({ item }) => <InvoiceItem data={item}/>}
						keyExtractor={item => item.id}
					/>
				</ScrollView>

				{/* show FilterSelectionUI if value is true */}
				{ showFilterSelectionUI && <FilterSelection/> }

				{/* show SortSelectionUI if value is true */}
				{ showSortSelectionUI && <SortSelection/> }

				<TouchableWithoutFeedback onPress={()=> {
					onShowFilterSelectionUI(false)
					onShowSortSelectionUI(false)
				}}>
					<View style={styles.footer}>
						<AppButton title={"Sort"} onPress={onSortButtonPressed}/>
						<AppButton title={"Filter"} onPress={onFilterButtonPressed}/>
						<AppButton title={"Create Invoice"} onPress={onGoToCreateInvoiceScreen}/>
					</View>
				</TouchableWithoutFeedback>

			</SafeAreaView>
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
	selectionPanel:{
		borderBottomColor: "gray",
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: 'space-around',
		marginVertical: 10,
	},
	footer:{
		borderBottomColor: "gray",
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: 'space-around',
		marginVertical: 10,
		flexDirection:'row'
	},
});
