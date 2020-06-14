// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
	data: {
		invoiceId: string,
		merchantId: string,
		transactionDate: string,
		dueDate: string,
		totalTax: number,
		totalAmount: number,
		balanceAmount: number
	}
}

const InvoiceItem = ({ data }: Props) => {
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
			<Text style={styles.title}>{invoiceId}</Text>
			<Text>MerchantId:{merchantId}</Text>
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
