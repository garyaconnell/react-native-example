import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
	HomeScreen,
	ListScreen,
	ComponentsScreen,
	ImageScreen,
	CounterScreen,
	ColorScreen,
	SquareScreen,
	TextScreen,
	BoxScreen,
} from './src/screens';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Image: ImageScreen,
		Counter: CounterScreen,
		Color: ColorScreen,
		Square: SquareScreen,
		Text: TextScreen,
		BoxScreen: BoxScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App',
		},
	}
);

export default createAppContainer(navigator);
