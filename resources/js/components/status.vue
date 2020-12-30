<template>
	<div>
		<ul v-for="dado in dados">
			<li>{{dado.stat.name}} {{dado.base_stat}}</li>
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
        	// this.status = this.dados;
        },
    }
</script>
