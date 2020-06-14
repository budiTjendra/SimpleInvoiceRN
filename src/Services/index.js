// @flow
import axios from 'axios'

axios.defaults.baseURL = "https://api.101digital.io"

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
