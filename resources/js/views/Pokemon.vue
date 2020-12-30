<template>
	<div>
		<router-link :to="/">Pokedex</router-link>
		<h1>{{nome}} Nº {{numero}}</h1>
		<div>
			<img :src="imagem">
			<status :dados="status"></status>
		</div>
		<div>
			<h2>{{peso}} kg</h2>
			<h2>{{altura}} m</h2>
			<tipos :dados="tipos"></tipos>
			<habilidades :dados="habilidades"></habilidades>
		</div>

	</div>
</template>

<script>
	import Status from './../components/status.vue';
	import Tipos from './../components/tipos.vue';
	import Habilidades from './../components/habilidades.vue';


    export default {
    	components: {
    		Status,
    		Tipos,
			Habilidades
    	},
    	props: ['id'],
    	data() {
    		return {
    			nome: "",
    			imagem: "",
    			peso: "",
    			altura: "",
    			habilidades: "",
    			status: [],
    			tipos: [],
    		}
    	},
        mounted() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                .then(response => {
                	let data = response.data;
                    console.log(data);
                    this.nome = data.name;
                    this.imagem = data.sprites.other.['official-artwork'].front_default;
                    this.peso = data.weight;
                    this.altura = data.height;
                    this.habilidades = data.abilities;
                    this.tipos = data.types;
                    this.status = data.stats;
                })
        },
        computed: {
        	numero() {
	        	return ('000'+ this.id).slice(-3);
        	}
        }
    }
</script>
