import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native'
const CreateInvoiceScreen = ({navigation}) => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>Welcome to create invoice </Text>
			</View>
		</SafeAreaView>
	);
}

export default CreateInvoiceScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
