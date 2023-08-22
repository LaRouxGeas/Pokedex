import Pokedex from './views/Pokedex';
import Pokemon from './views/Pokemon';
import InfoScreen from './views/green_screen/InfoScreen.vue';
import SecondScreenInicio from './views/second_screen/Inicio.vue';

export default {
	mode: 'history',

	routes:[
		{
			path: '/',
			components: {
				default: Pokedex,
				"second-screen": SecondScreenInicio,
				"green-screen": InfoScreen
			}
		},
		{
			path: '/pokemon/:id',
			component: Pokemon,
			props: true
		}
	]
};
