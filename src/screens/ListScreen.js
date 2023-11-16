import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{
			name: 'Chandler',
			age: 33,
		},
		{
			name: 'Ross',
			age: 34,
		},
		{
			name: 'Joey',
			age: 31,
		},
		{
			name: 'Rachel',
			age: 32,
		},
		{
			name: 'Monica',
			age: 32,
		},
		{
			name: 'Phoebe',
			age: 33,
		},
	];
	return (
		<FlatList
			data={friends}
			keyExtractor={(friend) => friend.name}
			renderItem={({ item }) => (
				<Text style={styles.textStyle}>
					{item.name} - {item.age}
				</Text>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 100,
		marginHorizontal: 20,
	},
});

export default ListScreen;
