import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , TouchableOpacity} from 'react-native';
import AppButton from '../../Components/AppButton';
import InvoiceItem from './InvoiceItem';

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


const InvoiceList = ({navigation}) => {

	const performSorting = () => {
		console.log('perform Sorting')
	}

	const performFiltering = () => {
		console.log('filter')
	}

	const performSearch = ()=> {
		console.log('search')
	}

	const createInvoice = () => {
		navigation.navigate('CreateInvoice')
		console.log('create invoice')
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topPanel}>
				<AppButton title={"Sort"} onPress={performSorting}/>
				<AppButton title={"Filter"} onPress={performFiltering}/>
			</View>

			<FlatList
				data={DATA}
				renderItem={({ item }) => <InvoiceItem data={item}/>}
				keyExtractor={item => item.id}
			/>

			<View style={styles.bottomPanel}>
				<AppButton title={"Search"} onPress={performSearch}/>
				<AppButton title={"Create Invoice"} onPress={createInvoice}/>
			</View>
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
	topPanel:{
		justifyContent: 'space-around',
		flexDirection:'row',
		color:'white'
	},
	bottomPanel:{
		justifyContent: 'space-around',
		marginVertical: 10,
		flexDirection:'row'
	}
});
