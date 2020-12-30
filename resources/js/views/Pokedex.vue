<template>
    <div class="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4">
        <router-link :to="pokemon.url | ajustarUrl" v-for="pokemon in pokemons" :key="pokemon.name"
            class="m-0.5 py-1 px-2 capitalize text-white bg-green-400 rounded-md text-center">
            <span class="block">{{pokemon.name}}</span>
            <span class="block">{{pokemon.url | numero}}</span>
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
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
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
