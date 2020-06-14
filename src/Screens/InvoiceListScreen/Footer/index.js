// @flow
import React from 'react'
import {Button, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import AppButton from '../../../Components/AppButton';
import InvoiceListContext from '../InvoiceListContext';
import {ScreenName} from '../../../Constants';
import {sortType, actionType, filterType} from '../Constants/index'
import * as settings from '../../../Settings'

type Props = {
	navigation: Object
}
const Footer = ({navigation}:Props) =>{
	const invoiceListContext = React.useContext(InvoiceListContext)
	const [showSortSelectionUI, onShowSortSelectionUI] = React.useState(false);
	const [showFilterSelectionUI, onShowFilterSelectionUI] = React.useState(false);
	const [currentFilter, setCurrentFilter] = React.useState(settings.defaultFilterType)
	const [currentSort, setCurrentSort] = React.useState(undefined)

	const {
		dispatch,
		state: { data }
	} = invoiceListContext

	const sortByInvoiceId = () => {
		dispatch({ type: actionType.invoiceID , payload: {data}})
		setCurrentSort(sortType.invoiceID)
	}

	const sortByTransactionDate = () => {
		dispatch({ type: actionType.transactionDate, payload: {data}})
		setCurrentSort(sortType.transactionDate)
	}

	const sortByTotalTax = () => {
		dispatch( { type: actionType.totalTax, payload: {data}})
		setCurrentSort(sortType.totalTax)
	}

	const sortByTotalAmount = () => {
		dispatch( { type: actionType.totalAmount, payload: {data}})
		setCurrentSort(sortType.totalAmount)
	}

	const sortByBalanceAmount = () => {
		dispatch( { type: actionType.balanceAmount, payload: {data}})
		setCurrentSort(sortType.balanceAmount)
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
		const generateTitle = (title, sortType) => {
			if (sortType === currentSort){
				return title + "*"
			}
			return title
		}
		return (
			<View style={styles.selectionPanel}>
				<Button title={generateTitle("Invoice ID", sortType.invoiceID)} onPress={sortByInvoiceId}/>
				<Button title={generateTitle("Transaction Date", sortType.transactionDate)} onPress={sortByTransactionDate}/>
				<Button title={generateTitle("Total Tax", sortType.totalTax)} onPress={sortByTotalTax}/>
				<Button title={generateTitle("Total Amount", sortType.totalAmount)} onPress={sortByTotalAmount}/>
				<Button title={generateTitle("Balance Amount", sortType.balanceAmount)} onPress={sortByBalanceAmount}/>
			</View>
		)
	}

	const filterByAllHistory = () => {
		dispatch({ type: actionType.allHistory} )
		setCurrentFilter(filterType.allHistory)
	}

	const filterByOneMonthAgo = () => {
		dispatch( { type: actionType.aMonthAgo} )
		setCurrentFilter(filterType.aMonthAgo)
	}

	const filterByOneWeekAgo =  () => {
		dispatch( { type: actionType.aWeekAgo} )
		setCurrentFilter(filterType.aWeekAgo)
	}

	const filterYearToDate =  () => {
		dispatch( { type: actionType.yearToDate} )
		setCurrentFilter(filterType.yearToDate)
	}

	const FilterSelection = () => {
		const generateTitle = (title, filterType) => {
			if (filterType === currentFilter){
				return title + "*"
			}
			return title
		}

		return (
			<View style={styles.selectionPanel}>
				<Button title={generateTitle('A Week Ago', filterType.aWeekAgo)} onPress={filterByOneWeekAgo}/>
				<Button title={generateTitle('A Month Ago', filterType.aMonthAgo)} onPress={filterByOneMonthAgo}/>
				<Button title={generateTitle('Year to Date', filterType.yearToDate)} onPress={filterYearToDate}/>
				<Button title={generateTitle('All History', filterType.allHistory)} onPress={filterByAllHistory}/>
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
