import { useState } from 'react';

const { View, StyleSheet, TextInput, Text } = require('react-native');

const TextScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={password}
				onChangeText={(e) => setPassword(e)}
			/>
			{password.length < 5 ? (
				<Text>Password must be at least 5 characters</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		padding: 10,
		borderColor: '#CCC',
		borderWidth: 1,
	},
});

export default TextScreen;
