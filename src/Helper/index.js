import {Alert} from 'react-native';

export const showMessage = (message, title="") => {
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
