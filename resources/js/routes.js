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
			path: '/pokemon/:id',
			component: Pokemon,
			props: true
		}
	]
};
