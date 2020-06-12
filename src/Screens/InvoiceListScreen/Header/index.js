import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native';
import AppButton from '../../../Components/AppButton';

const Header = () => {
	const [searchText, onChangeSearchText] = React.useState('');

	const performSearch = ()=> {
		console.log('search', {searchText})
	}

	return (
		<View style={styles.header}>
			<TextInput
				style={{ flex: 1, borderColor: 'gray', padding: 10}}
				onChangeText={text => onChangeSearchText(text)}
				placeholder={"search by merchant id"}
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

