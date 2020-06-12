import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InvoiceItem = ({ data }) => {
	const {
		invoiceId,
		merchantId,
		transactionDate,
		dueDate,
		totalTax,
		totalAmount,
		balanceAmount
	} = data;

	return (
		<View style={styles.item}>
			<Text style={styles.title}>{merchantId}</Text>
			<Text>InvoiceId:{invoiceId}</Text>
			<Text>TransactionDate:{transactionDate}</Text>
			<Text>DueDate:{dueDate}</Text>
			<Text>TotalTax:{totalTax}</Text>
			<Text>TotalAmount:{totalAmount}</Text>
			<Text>BalanceAmount:{balanceAmount}</Text>
		</View>
	);
}

export default InvoiceItem

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	}
});