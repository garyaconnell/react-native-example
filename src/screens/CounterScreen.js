import { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'increase':
		case 'decrease':
			return { ...state, counter: state.counter + payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });
	const { counter } = state;
	return (
		<View>
			<Button
				title='Increase'
				onPress={() => dispatch({ type: 'increase', payload: 1 })}
			/>
			<Button
				title='Decrease'
				onPress={() => dispatch({ type: 'decrease', payload: -1 })}
			/>
			<Text>Current Count: {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
