import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , TouchableOpacity} from 'react-native';
import AppButton from '../../Components/AppButton';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d721',
		title: 'Third Item',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d724',
		title: 'Third Item',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d727',
		title: 'Last Item',
	},
];

const Item = ({ title }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

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
				renderItem={({ item }) => <Item title={item.title} />}
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
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
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
		backgroundColor: 'yellow',
		justifyContent: 'space-around',
		flexDirection:'row'
	}
});
