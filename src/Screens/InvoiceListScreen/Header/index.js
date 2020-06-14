import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native';
import AppButton from '../../../Components/AppButton';
import InvoiceListContext from '../InvoiceListContext';
import * as config from '../Config'

const Header = () => {
	const [searchText, onChangeSearchText] = React.useState(config.defaultSearchText);
	const invoiceListContext = React.useContext(InvoiceListContext)

	const {
		searchByMerchantRef,
	} = invoiceListContext

	return (
		<View style={styles.header}>
			<TextInput
				style={{ flex: 1, borderColor: 'gray', padding: 10}}
				onChangeText={text => onChangeSearchText(text)}
				placeholder={"search by merchant reference"}
				value={searchText}
			/>
			<AppButton title={"Search"} onPress={ () => searchByMerchantRef(searchText)}/>
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

