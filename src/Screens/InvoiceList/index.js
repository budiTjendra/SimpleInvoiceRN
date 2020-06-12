import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , TouchableOpacity} from 'react-native';

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

function Item({ title }) {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

export default function InvoiceList() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topPanel}>
				<TouchableOpacity>
					<Text>Sort</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Filter</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={item => item.id}
			/>
			<View style={styles.bottomPanel}>
				<TouchableOpacity>
					<Text>Search</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Create Invoice</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

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
