// @flow
import {Alert} from 'react-native';

export const showMessage = (message: string, title: string="") => {
	Alert.alert(
		title,
		message,
		[
			{
				text: "Ok",
			},
		],
	)
}
