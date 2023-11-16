import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	const createColor = () => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);

		const rgb = `rgb(${red}, ${green}, ${blue})`;
		setColors([...colors, rgb]);
	};

	return (
		<View>
			<Button
				title='Add Color'
				onPress={createColor}
			/>
			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => (
					<View
						style={{
							height: 100,
							width: 100,
							backgroundColor: item,
						}}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorScreen;
