<template>
    <div v-if="loading" class="spinner-grow text-primary" role="status">
		<span class="sr-only">Loading...</span>
	</div>
    <div v-else class="col-md-4 mt-2" v-for="user in users" :key="user.id">
        <CardUsers :user="user" />
    </div>	
</template>

<script>
	import axios from 'axios'
	import {ref} from 'vue'
	import CardUsers from '@/components/CardUsers.vue'

	export default {
		components: {
			CardUsers
		},

		setup(){
			const users = ref([]);
			const loading = ref(true);

			function getUsers(){
				axios
				.get("https://jsonplaceholder.typicode.com/users")
				.then(function(response){
					users.value = response.data;
					loading.value = false;
				})		
				.catch(function(error){
					console.log(error);
				});
			}
			getUsers();

			return { users }
		},
	}
</script>