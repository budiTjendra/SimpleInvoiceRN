// @flow
import React, {useState} from 'react'
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
import * as settings from '../../Settings'
import * as services from '../../Services'
import {useSelector} from 'react-redux';
import * as helper from '../../Helper';

const CreateInvoiceScreen = () => {
	const [merchantReference, onChangeMerchantReference] = useState(settings.defaultMerchantReference)
	const [merchantContactId, onChangeMerchantContactId] = useState(settings.defaultMerchantContactId);
	const [merchantEmail, onChangeMerchantEmail] = useState(settings.defaultMerchantEmail);
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
	const [checkRequired, setCheckRequired]= useState(false)
	const authenticationState = useSelector(state => state.authenticationReducer)

	const isValid = () =>{
		if(merchantReference.trim() === '' ||
			merchantContactId.trim() === '' ||
			merchantEmail.trim() === '' ||
			invoiceReference.trim() === '' ||
			currency.trim() === '' ||
			invoiceDate.trim() === '' ||
			transactionDate.trim() === '' ||
			dueDate.trim() === '' ||
			settlementDate.trim() === '' ||
			itemReference === '' ||
			itemDescription === '' ||
			quantity === '' ||
			taxId.trim() === '' ||
			amount === ''
		){
			return false;
		}

		return true;
	}

	const showConfirmation = (fn) =>{
		Alert.alert(
			"Confirmation",
			"Click OK to Proceed",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{ text: "OK", onPress: fn }
			],
			{ cancelable: false }
		)
	}

	const createInvoice = () => {
		setCheckRequired(true)

		const {
			accessToken: { access_token }
		} = authenticationState

		const fn = () => {
			services.createInvoice({
				token: access_token,
				merchantReference,
				merchantContactId,
				merchantEmail,
				invoiceReference,
				currency,
				invoiceDate,
				transactionDate,
				dueDate,
				settlementDate,
				itemReference,
				itemDescription,
				quantity: parseInt(quantity),
				taxId,
				amount: parseFloat(amount)
			}).then(resp => {
				helper.showMessage(`invoice "${invoiceReference}" is successfully created`)
				console.log('create invoice successful', resp)
			})

			helper.showMessage("request submitted")
		}

		showConfirmation(fn);

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
							showRequired={checkRequired && merchantReference === ""}
							label={"Merchant Reference"}
							placeholder={"eg:706683"}
							value={merchantReference}
							onChangeText={text => onChangeMerchantReference(text)}/>

						<InputField
							showRequired={checkRequired && merchantContactId === ""}
							label={"Merchant ContactId"}
							placeholder={"eg:569809"}
							value={merchantContactId}
							onChangeText={text => onChangeMerchantContactId(text)}/>

						<InputField
							showRequired={checkRequired && merchantEmail === ""}
							label={"Merchant Email"}
							placeholder={"eg:dung@101digital.io"}
							value={merchantEmail}
							onChangeText={text => onChangeMerchantEmail(text)}/>

						<InputField
							showRequired={checkRequired && invoiceReference === ""}
							label={"Invoice Reference"}
							placeholder={"eg:INV0001"}
							value={invoiceReference}
							onChangeText={text => onChangeInvoiceReference(text)}/>

						<InputField
							showRequired={checkRequired && currency === ""}
							label={"Currency"}
							placeholder={"eg:GBP"}
							value={currency}
							onChangeText={text => onChangeCurrency(text)}/>

						<InputField
							showRequired={checkRequired && invoiceDate === ""}
							label={"Invoice Date"}
							placeholder={"format: yyyy-mm-dd"}
							value={invoiceDate}
							onChangeText={text => onChangeInvoiceDate(text)}/>

						<InputField
							showRequired={checkRequired && transactionDate === ""}
							label={"Transaction Date"}
							placeholder={"format: yyyy-mm-dd"}
							value={transactionDate}
							onChangeText={text => onChangeTransactionDate(text)}/>

						<InputField
							showRequired={checkRequired && dueDate === ""}
							label={"Due Date"}
							placeholder={"format: yyyy-mm-dd"}
							value={dueDate}
							onChangeText={text => onChangeDueDate(text)}/>

						<InputField
							showRequired={checkRequired && settlementDate === ""}
							label={"Settlement Date"}
							placeholder={"format: yyyy-mm-dd"}
							value={settlementDate}
							onChangeText={text => onChangeSettlementDate(text)}/>

						<InputField
							showRequired={checkRequired && itemReference === ""}
							label={"Item Reference"}
							placeholder={"eg: INV0001"}
							value={itemReference}
							onChangeText={text => onChangeItemReference(text)}/>

						<InputField
							showRequired={checkRequired && itemDescription === ""}
							label={"Item Description"}
							placeholder={"eg: Paint the apartment"}
							value={itemDescription}
							onChangeText={text => onChangeItemDescription(text)}/>

						<InputField
							showRequired={checkRequired && quantity === ""}
							label={"Quantity"}
							placeholder={"format: number"}
							value={quantity}
							onChangeText={text => onChangeQuantity(text)}/>

						<InputField
							showRequired={checkRequired && taxId === ""}
							label={"Tax id"}
							placeholder={"eg: 2"}
							value={taxId}
							onChangeText={text => onChangeTaxId(text)}/>

						<InputField
							showRequired={checkRequired && amount === ""}
							label={"Amount"}
							placeholder={"format: number"}
							value={amount}
							onChangeText={text => onChangeAmount(text)}/>

					</ScrollView>

					<View style={styles.btnContainer}>
						<Button title="Submit" onPress={createInvoice} disabled={!isValid()} />
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
