<template>
	<div>
        <label class="text-gray-700 text-xl font-bold">Habilidades</label>
		<ul>
			<li v-for="dado in dados" v-show="!dado.is_hidden">
                {{dado.ability.name}}
            </li>
		</ul>
	</div>
</template>

<script>
    export default {
    	props: ['dados'],
    	data() {
    		return {
    			status: []
    		}
    	},
        mounted() {

        },
    }
</script>
