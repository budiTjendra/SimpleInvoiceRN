import React from 'react'
import {Button, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import AppButton from '../../../Components/AppButton';
import InvoiceListContext from '../InvoiceListContext';
import {ScreenName} from '../../../Constants';
import {sortType} from '../Constants/index'

const Footer = ({navigation}) =>{
	const invoiceListContext = React.useContext(InvoiceListContext)
	const [showSortSelectionUI, onShowSortSelectionUI] = React.useState(false);
	const [showFilterSelectionUI, onShowFilterSelectionUI] = React.useState(false);

	const {
		dispatch
	} = invoiceListContext

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

	const sortByBalanceAmount = () => {
		dispatch( { type: sortType.balanceAmount})
	}

	const onGoToCreateInvoiceScreen = () => {
		onShowSortSelectionUI(false)
		onShowFilterSelectionUI(false)

		navigation.navigate(ScreenName.createInvoice)
	}

	const onSortButtonPressed = () => {
		onShowSortSelectionUI(!showSortSelectionUI)
		onShowFilterSelectionUI(false)
	}

	const onFilterButtonPressed = () => {
		onShowFilterSelectionUI(!showFilterSelectionUI)
		onShowSortSelectionUI(false)
	}

	const SortSelection = () => {
		return (
			<View style={styles.selectionPanel}>
				<Button title={"Invoice ID"} onPress={sortByInvoiceId}/>
				<Button title={"Transaction Date"} onPress={sortByTransactionDate}/>
				<Button title={"Total Tax"} onPress={sortByTotalTax}/>
				<Button title={"Total Amount"} onPress={sortByTotalAmount}/>
				<Button title={"Balance Amount"} onPress={sortByBalanceAmount}/>
			</View>
		)
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

	const filterYearToDate = () => {
		console.log('filterYearToDate')
	}

	const FilterSelection = () => {
		return (
			<View style={styles.selectionPanel}>
				<Button title={"A Week Ago"} onPress={filterByOneWeekAgo}/>
				<Button title={"A Month Ago"} onPress={filterByOneMonthAgo}/>
				<Button title={"Year to Date"} onPress={filterYearToDate}/>
				<Button title={"All History"} onPress={filterByAllHistory}/>
			</View>
		)
	}

	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}

export default Footer

const styles = StyleSheet.create({
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
