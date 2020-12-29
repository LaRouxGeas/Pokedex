import Pokedex from './views/Pokedex';
import Pokemon from './views/Pokemon';

export default {
	mode: 'history',

	routes:[
		{
			path: '/',
			component: Pokedex
		},
		{
			path: '/pokemon',
			component: Pokemon
		}
	]
};
