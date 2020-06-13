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
	// Set config defaults when creating the instance
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
