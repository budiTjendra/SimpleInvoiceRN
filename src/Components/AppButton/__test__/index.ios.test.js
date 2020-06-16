import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import AppButton from '../index.ios';

it("test ios appButton", () => {
	const mockFn = jest.fn()
	const { getByText } = render(<AppButton title={"mockTitle"} onPress={mockFn}/>)
	expect(getByText("mockTitle")).toBeTruthy()
	fireEvent.press(getByText("mockTitle"))
	expect(mockFn).toBeCalledTimes(1)
})
