import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'Gary';
	return (
		<View>
			<Text style={styles.headerStyle}>
				Getting started with React Native!
			</Text>
			<Text style={styles.subHeaderStyle}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		fontSize: 30,
	},
	subHeaderStyle: {
		fontSize: 18,
	},
});

export default ComponentsScreen;
