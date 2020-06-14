// @flow
import React from 'react'
import {StyleSheet, Text, TextInput} from 'react-native';


type Props = {|
	label: string,
	showRequired: boolean,
	onChangeText: Function,
	placeholder: string,
	value: string
|}

const InputField = ({label, showRequired, ...rest}:Props) => {
	return (
		<React.Fragment>
			<Text style={styles.displayText}>{label}</Text>
			{ showRequired && <Text style={styles.requiredText}>* required fields</Text>}

			<TextInput  style={styles.inputText} {...rest}/>
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
	requiredText:{
		color:'red'
	},
});
