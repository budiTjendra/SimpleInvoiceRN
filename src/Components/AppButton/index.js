import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const AppButton = ({onPress, title}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text>{title}</Text>
		</TouchableOpacity>
	);
}

export default AppButton;

