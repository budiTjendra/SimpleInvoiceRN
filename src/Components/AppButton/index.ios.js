// @flow
import React from 'react';
import { Button } from 'react-native';

const AppButton = (props: any) => {
	return (
		<Button {...props} testID={'appButton'}/>
	);
}

export default AppButton;


