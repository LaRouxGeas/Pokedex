<template>
	<div>
		<label class="text-gray-700 text-xl font-bold">Status</label>
		<ul class="flex">
			<li v-for="dado in dados" class="w-1/6 text-center">
				<p class="text-gray-700 text-lg capitalize font-bold">{{dado.stat.name}}</p>
				<small class="text-md">{{dado.base_stat}}</small>
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
        	// this.status = this.dados;
        },
    }
</script>
