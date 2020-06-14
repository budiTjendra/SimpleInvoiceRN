// @flow
import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native';
import AppButton from '../../../Components/AppButton';
import InvoiceListContext from '../InvoiceListContext';

const Header = () => {
	const invoiceListContext = React.useContext(InvoiceListContext)

	const {
		performSearch,
		searchText,
		onChangeSearchText
	} = invoiceListContext

	return (
		<View style={styles.header}>
			<TextInput
				style={{ flex: 1, borderColor: 'gray', padding: 10}}
				onChangeText={text => onChangeSearchText(text)}
				placeholder={"search by merchant reference"}
				value={searchText}
			/>
			<AppButton title={"Search"} onPress={performSearch}/>
		</View>
	)
}

export default Header;

const styles = StyleSheet.create({
	header:{
		justifyContent: 'space-around',
		flexDirection:'row',
		color:'white',
		marginHorizontal: 10
	},
});

