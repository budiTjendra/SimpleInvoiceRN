import React from 'react'
import {StyleSheet, Text, TextInput} from 'react-native';

const InputField = ({label, ...rest}) => {
	return (
		<React.Fragment>
			<Text style={styles.displayText}>{label}</Text>
			<TextInput style={styles.inputText} {...rest}/>
		</React.Fragment>
	)
}

export default InputField

const styles = StyleSheet.create({
	displayText:{
		fontSize:12,
		color: "gray"
	},
	inputText: {
		fontSize:15,
		padding: 4,
		borderBottomColor: "gray",
		borderBottomWidth: StyleSheet.hairlineWidth
	},

});
