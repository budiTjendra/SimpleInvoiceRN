import React from 'react'
import { render } from 'react-native-testing-library'

import InputField from '../index';

test('test showRequired should hide', () => {
	const { queryByTestId } = render(
		<InputField
			label={"label"}
			showRequired={false}
			/>
	)
	const requiredFieldComponent = queryByTestId('inputField_requiredText');
	expect(requiredFieldComponent).toBeNull();
})

test('test showRequired should display', () => {
	const { queryByTestId } = render(
		<InputField
			label={"label"}
			showRequired={true}
		/>
	)
	const requiredFieldComponent = queryByTestId('inputField_requiredText');
	expect(requiredFieldComponent).not.toBeNull();
})


test('test label', () => {
	const {getByText } = render(
		<InputField
			label={"mock"}
		/>
	)
	expect(getByText('mock')).toBeTruthy()
})
