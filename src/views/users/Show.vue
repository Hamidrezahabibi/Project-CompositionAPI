<template>
    <div v-if="loading" class="spinner-grow text-primary" role="status">
		<span class="sr-only">Loading...</span>
	</div>
    <div v-else class="col-md-4 mt-2">
        <CardUsers :user="user" />
    </div>  	
</template>

<script>
	import axios from 'axios'
	import {ref} from 'vue'
	import CardUsers from '@/components/CardUsers.vue'
    import {useRoute} from 'vue-router'

	export default {
		components: {
			CardUsers
		},

		setup(){
			const user = ref({});
			const loading = ref(true);
            const route = useRoute();

			function getUser(){
				axios
				.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
				.then(function(response){
					user.value = response.data;
					loading.value = false;
				})		
				.catch(function(error){
					console.log(error);
				});
			}
			getUser();

			return { user, loading }
		},
	}
</script>