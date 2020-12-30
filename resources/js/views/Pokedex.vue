<template>
    <div>
        <ul v-for="pokemon in pokemons">
            <li>{{pokemon.name}} <router-link :to=" pokemon.url | ajustarUrl">Detalhes</router-link></li>
        </ul>
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
            axios.get('https://pokeapi.co/api/v2/pokemon')
                .then(response => {
                    // console.log(response.data.results);
                    this.pokemons = response.data.results;
                })
        },
        filters: {
            ajustarUrl(url) {
                return '/pokemon/' + url.match('pokemon\/([0-9]+)\/?')[1];
            }
        }
    }
</script>
