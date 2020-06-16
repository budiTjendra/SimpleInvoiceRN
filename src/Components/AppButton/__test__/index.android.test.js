import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import AppButton from '../index.android';

it("test android appButton", () => {
	const mockFn = jest.fn()
	const { getByText } = render(
		<AppButton title={"mock title"} onPress={mockFn}/>
	)
	expect(getByText("mock title")).toBeTruthy()
	fireEvent.press(getByText("mock title"))
	expect(mockFn).toBeCalledTimes(1)
})
