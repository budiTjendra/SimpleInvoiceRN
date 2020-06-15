// @flow
import axios from 'axios'
import store from '../Redux/Store';
import * as actions from '../Redux/Actions'
import * as settings from '../Settings'

axios.defaults.baseURL = settings.endPoint

const api_path = {
	token: "/token",
	invoice: "/yrc-invoice-service"
}

const api_version = "v1.0"

const url = {
	token: `${api_path.token}`,
	invoice: `${api_path.invoice}/${api_version}/invoices`,
}

export const getAccessToken = () => {
	const result = axios({
		method: 'post',
		url: url.token,
		headers: {
			'Authorization': 'Basic a1B6UWVFM0N0azk0QWpoc0Q5SUFtZk1jWk93YTpjMW0yRFNkcUg0dFZpZFhLNEFWYTRlWE15QVFh',
			'Content-Type': 'application/x-www-form-urlencoded,application/x-www-form-urlencoded'
		},
		data: 'grant_type=client_credentials&scope=PRODUCTION'
	});

	return result;
}

type getInvoicesParams = {
	token: string,
	fromDate: string,
	toDate: string,
	merchantReference: string,
	pageSize?: number,
	pageNum?: number,
}

export const getInvoices = (params : getInvoicesParams) => {
	const {
		token,
		fromDate,
		toDate,
		merchantReference,
		pageSize = 100,
		pageNum = 1,
	} = params

	const result = axios({
		method: 'get',
		url: url.invoice,
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		data: null,
		params: {
			fromDate,
			toDate,
			pageSize,
			pageNum,
			merchantReference
		}
	});

	return result;
}

type createInvoiceParams = {
	token: string,
	merchantReference: string,
	merchantContactId: string,
	merchantEmail: string,
	invoiceReference: string,
	currency: string,
	invoiceDate: string,
	transactionDate: string,
	dueDate: string,
	settlementDate: string,
	itemReference: string,
	itemDescription: string,
	quantity: number,
	taxId: string,
	amount: number
}

export const createInvoice = (params: createInvoiceParams) =>{
	const {
		token,
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
		quantity,
		taxId,
		amount
	} = params

	const result = axios({
		method: 'post',
		url: url.invoice,
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		data: {
			"listOfInvoices": [
				{
					"merchant": {
						"merchantReference": merchantReference,
						"contact": {
							"id": merchantContactId,
							"email": merchantEmail
						}
					},
					"invoiceReference": invoiceReference,
					"currency": currency,
					"invoiceDate": invoiceDate,
					"transactionDate": transactionDate,
					"dueDate": dueDate,
					"settlementDate": settlementDate,
					"items": [
						{
							"itemReference": itemReference,
							"description": itemDescription,
							"quantity": quantity,
							"taxId": taxId,
							"amount": amount
						}
					]
				}]
		},
	});

	return result;
}

//handler for token expiry
axios.interceptors.response.use((response) => {
	return response;
}, (error) => {
	// Return any error which is not due to authentication back to the calling service
	if (error.response.status !== 401) {
		return new Promise((resolve, reject) => {
			reject(error);
		});
	}

	// Return error, token refresh  didnot work
	if (error.config.url === api_path.token){
		return new Promise((resolve, reject) => {
			reject(error);
		});
	}
	
	//Try request again with new Token
	return getAccessToken().then(
		resp => {
			store.dispatch(actions.setToken(resp.data))

			// New request with new token
			const config = error.config;
			config.headers['Authorization'] = `Bearer ${resp.data.access_token}`;

			return new Promise((resolve, reject) => {
				axios.request(config).then(response => {
					resolve(response);
				}).catch((error) => {
					reject(error);
				})
			});
		}
	)
})
