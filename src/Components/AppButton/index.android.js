// @flow
import React from 'react';
import {Text, TouchableNativeFeedback, View,StyleSheet} from 'react-native';

const AppButton = ({testID = "appButton", onPress, title,  ...rest}) => {
	return (
		<TouchableNativeFeedback
			onPress={onPress}
			testID={testID}
		>
			<View style={styles.touchable} {...rest}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</TouchableNativeFeedback>
	);
}

export default AppButton;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
		padding: 8
	},
	touchable: {
		flex: 0.5,
		borderColor: "gray",
		borderWidth: StyleSheet.hairlineWidth,
		alignSelf: 'center' ,
		marginHorizontal: 10,
		paddingVertical: 5
	},
	text: { alignSelf: "center" }
});

