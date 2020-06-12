import React from 'react'
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'

const CreateInvoice = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>Welcome to create invoice </Text>
			</View>
		</SafeAreaView>
	);
}

export default CreateInvoice;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
