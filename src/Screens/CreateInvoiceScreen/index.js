import React, {useLayoutEffect, useState} from 'react'
import {
	View,
	Button,
	ScrollView,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback, Keyboard, Alert
} from 'react-native'
import InputField from './InputField';

const CreateInvoiceScreen = () => {
	const [merchantReference, onChangeMerchantReference] = useState("706683")
	const [merchantContactId, onChangeMerchantContactId] = useState("569809");
	const [merchantEmail, onChangeMerchantEmail] = useState("dung@101digital.io");
	const [invoiceReference, onChangeInvoiceReference] = useState("");
	const [currency, onChangeCurrency] = useState("");
	const [invoiceDate, onChangeInvoiceDate] = useState("");
	const [transactionDate, onChangeTransactionDate] = useState("")
	const [dueDate, onChangeDueDate] = useState("")
	const [settlementDate, onChangeSettlementDate] = useState("")
	const [itemReference, onChangeItemReference] = useState("")
	const [itemDescription, onChangeItemDescription] = useState("")
	const [quantity, onChangeQuantity] = useState ("")
	const [taxId, onChangeTaxId] = useState("")
	const [amount, onChangeAmount] = useState("")

	const createInvoice = () => {
		console.log('create invoice', {merchantReference}, {merchantContactId} , {merchantEmail})
		return (
			Alert.alert(
				"Confirmation",
				"Click OK to Proceed",
				[
					{
						text: "Cancel",
						onPress: () => console.log("Cancel Pressed"),
						style: "cancel"
					},
					{ text: "OK", onPress: () => console.log("OK Pressed") }
				],
				{ cancelable: false }
			)
		)

	}

	return(
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<ScrollView>
						<InputField
							label={"Merchant Reference"}
							placeholder={"eg:706683"}
							value={merchantReference}
							onChangeText={text => onChangeMerchantReference(text)}/>

						<InputField
							label={"Merchant ContactId"}
							placeholder={"eg:569809"}
							value={merchantContactId}
							onChangeText={text => onChangeMerchantContactId(text)}/>

						<InputField
							label={"Merchant Email"}
							placeholder={"eg:dung@101digital.io"}
							value={merchantEmail}
							onChangeText={text => onChangeMerchantEmail(text)}/>

						<InputField
							label={"Invoice Reference"}
							placeholder={"eg:INV0001"}
							value={invoiceReference}
							onChangeText={text => onChangeInvoiceReference(text)}/>

						<InputField
							label={"Currency"}
							placeholder={"eg:GBP"}
							value={currency}
							onChangeText={text => onChangeCurrency(text)}/>

						<InputField
							label={"Invoice Date"}
							placeholder={"format: yyy-mm-dd"}
							value={invoiceDate}
							onChangeText={text => onChangeInvoiceDate(text)}/>

						<InputField
							label={"Transaction Date"}
							placeholder={"format: yyy-mm-dd"}
							value={transactionDate}
							onChangeText={text => onChangeTransactionDate(text)}/>

						<InputField
							label={"Due Date"}
							placeholder={"format: yyy-mm-dd"}
							value={dueDate}
							onChangeText={text => onChangeDueDate(text)}/>

						<InputField
							label={"Settlement Date"}
							placeholder={"format: yyy-mm-dd"}
							value={settlementDate}
							onChangeText={text => onChangeSettlementDate(text)}/>

						<InputField
							label={"Item Reference"}
							placeholder={"eg: INV0001"}
							value={itemReference}
							onChangeText={text => onChangeItemReference(text)}/>

						<InputField
							label={"Item Description"}
							placeholder={"eg: Paint the apartment"}
							value={itemDescription}
							onChangeText={text => onChangeItemDescription(text)}/>

						<InputField
							label={"Quantity"}
							placeholder={"format: number"}
							value={quantity}
							onChangeText={text => onChangeQuantity(text)}/>

						<InputField
							label={"Tax id"}
							placeholder={"format: number"}
							value={taxId}
							onChangeText={text => onChangeTaxId(text)}/>

						<InputField
							label={"Amount"}
							placeholder={"format: number"}
							value={amount}
							onChangeText={text => onChangeAmount(text)}/>

					</ScrollView>

					<View style={styles.btnContainer}>
						<Button title="Submit" onPress={createInvoice} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>

	);
}

export default CreateInvoiceScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content:{
		padding:10,
	},
	displayText:{
		color: "gray"
	},
	inputText: {
		padding: 4,
		borderBottomColor: "gray",
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	inner: {
		padding: 24,
		flex: 1,
		justifyContent: "space-around"
	},
	header: {
		fontSize: 36,
		marginBottom: 48
	},
	textInput: {
		height: 40,
		borderColor: "#000000",
		borderBottomWidth: 1,
		marginBottom: 36
	},
	btnContainer: {
		backgroundColor: "white",
		marginBottom: 100
	}
});
