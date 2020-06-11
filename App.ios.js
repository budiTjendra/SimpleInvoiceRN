import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import List from './src/Components/List'

export default function App() {
	const goToCreateInvoice = () => {
		console.log("create invoice")
	}


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
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Third Item',
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
			title: 'First Item',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
			title: 'Second Item',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d723',
			title: 'Third Item',
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba14',
			title: 'First Item',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6325',
			title: 'Second Item',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d7236',
			title: 'Last Item',
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<List
				data={DATA}
				keyExtractor={item => item.id}
			/>
			<View style={styles.navigationContainer}>
				<TouchableOpacity onPress={goToCreateInvoice}>
					<Text>Create Invoice</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={goToCreateInvoice}>
					<Text>Create Invoice2</Text>
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
	navigationContainer: {
		backgroundColor: 'yellow',
		justifyContent: 'space-around',
		flexDirection: 'row'
	}
});
