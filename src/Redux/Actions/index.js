export const UPDATE_ACCESS_TOKEN = "UPDATE_ACCESS_TOKEN"
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN"

/*
 * action creators
 */
export const updateToken = (token) =>{
	return { type: UPDATE_ACCESS_TOKEN, token}
}

export const setToken  = (token) =>{
	return { type: SET_ACCESS_TOKEN, payload: {token} }
}
