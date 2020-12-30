<template>
	<div>
		<ul v-for="dado in dados">
			<li v-show="!dado.is_hidden">{{dado.ability.name}}</li>
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
