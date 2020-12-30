<template>
	<div>
        <label class="text-gray-700 text-xl font-bold">Tipo</label>
		<ul class="flex">
			<li v-for="dado in dados" class="m-0.5 w-1/2 py-1 px-2 capitalize text-white bg-gray-600 rounded-md text-center">{{dado.type.name}}</li>
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
