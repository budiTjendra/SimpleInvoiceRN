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
		color: "gray"
	},
	inputText: {
		padding: 4,
		borderBottomColor: "gray",
		borderBottomWidth: StyleSheet.hairlineWidth
	},

});
