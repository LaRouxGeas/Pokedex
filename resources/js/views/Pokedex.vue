<template>
    <div class="flex flex-col justify-center h-full">
        <router-link :to="pokemon.url | ajustarUrl" v-for="pokemon in pokemons" :key="pokemon.name"
            class="mx-2 py-1 px-2 capitalize text-white flex justify-between rounded-md hover:bg-green-400 ">
            <span>No.{{pokemon.url | numero}}</span>
            <span>{{pokemon.name}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pokemons: []
            }
        },
        mounted() {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
                .then(response => {
                    this.pokemons = response.data.results;
                })
        },
        filters: {
            ajustarUrl(url) {
                return '/pokemon/' + url.match('pokemon\/([0-9]+)\/?')[1];
            },
            numero(url) {
                return ('000' + url.match('pokemon\/([0-9]+)\/?')[1]).slice(-3);
            }
        }
    }
</script>
