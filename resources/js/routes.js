import Pokedex from './views/Pokedex';
import Pokemon from './views/Pokemon';

export default {
	mode: 'hash',

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
