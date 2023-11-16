import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
	const { red, green, blue } = state;
	const { type, payload } = action;

	function changeColor(type, color, payload) {
		return color + payload > 255 || color + payload < 0
			? state
			: { ...state, [type]: color + payload };
	}

	switch (type) {
		case 'red':
			return changeColor(type, red, payload);
		case 'green':
			return changeColor(type, green, payload);
		case 'blue':
			return changeColor(type, blue, payload);
		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});

	const { red, green, blue } = state;

	useEffect(() => {
		console.log(state);
	}, [state]);

	const COLOR_INCREMENT = 10;
	return (
		<View>
			<ColorCounter
				onIncrease={() =>
					dispatch({
						type: 'red',
						payload: COLOR_INCREMENT,
					})
				}
				onDecrease={() =>
					dispatch({
						type: 'red',
						payload: -1 * COLOR_INCREMENT,
					})
				}
				color='Red'
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({
						type: 'green',
						payload: COLOR_INCREMENT,
					})
				}
				onDecrease={() =>
					dispatch({
						type: 'green',
						payload: -1 * COLOR_INCREMENT,
					})
				}
				color='Green'
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ type: 'blue', payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({
						type: 'blue',
						payload: -1 * COLOR_INCREMENT,
					})
				}
				color='Blue'
			/>
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red},${green},${blue})`,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
