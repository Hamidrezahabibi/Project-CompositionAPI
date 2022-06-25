<template>
    <div v-if="loading" class="spinner-grow text-primary" role="status">
		<span class="sr-only">Loading...</span>
	</div>
    <div v-else class="col-md-12 mt-2">
        <ShowPostView :post="post" />
    </div>  	
</template>

<script>
	import axios from 'axios'
	import {ref} from 'vue'
	import ShowPostView from '@/components/ShowPostView.vue'
    import {useRoute} from 'vue-router'

	export default {
		components: {
			ShowPostView
		},

		setup(){
			const post = ref({});
			const loading = ref(true);
            const route = useRoute();

			function getPost(){
				axios
				.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
				.then(function(response){
					post.value = response.data;
					loading.value = false;
				})		
				.catch(function(error){
					console.log(error);
				});
			}
			getPost();

			return { post, loading }
		},
	}
</script>