<template>
	<div class="flex justify-center">
        <div class="w-80">
            <img :src="imagem" class="w-full">
        </div>
		<!-- <h1 class="capitalize w-full py-3 text-center bg-gray-800 font-bold text-3xl text-white rounded-t-lg">{{nome}} No.{{numero}}</h1>
		<div class="w-full h-full flex flex-wrap">
			<div class="flex-none w-1/3">
				<img :src="imagem" class="w-full object-cover">
			</div>
			<div class="w-2/3">
				<div>
					<label class="text-gray-700 text-xl font-bold">Peso</label>
					<h2>{{peso}} kg</h2>
				</div>
				<div>
					<label class="text-gray-700 text-xl font-bold">Altura</label>
					<h2>{{altura}} m</h2>
				</div>
				<habilidades :dados="habilidades"></habilidades>
				<tipos :dados="tipos"></tipos>
				<status :dados="status"></status>
			</div>
			<div class="w-full text-right m-5">
				<router-link :to="'/'">
					<button class="m-0.5 py-2 px-3 text-white bg-gray-600 rounded-md text-center focus:ring-2 ring-gray-400">Voltar</button>
				</router-link>
			</div>
		</div> -->

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
