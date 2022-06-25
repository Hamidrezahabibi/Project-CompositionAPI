<template>
	<div class="card" style="width: 70rem;">
	  <div class="card-header">
	  	<router-link :to="{name:'postId' , params:{id:post.id}}"> {{ post.title }} </router-link>
	  </div>
	  <ul class="list-group list-group-flush">
	    <li class="list-group-item">Body: {{ post.body }}</li>
	  </ul>
	  <div class="card-footer">
	  	<router-link :to="{name:'editPost' , params:{id:post.id}}" class="btn btn-warning mr-3"> Edit </router-link>
		<button @click="deletePost" class="btn btn-danger"> Delete </button>
	  </div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Swal from 'sweetalert2';
	import {useRoute} from 'vue-router';

	export default {
		props: {
			post:Object
		},
		setup(){
			const route = useRoute();
			function deletePost(){
				axios
				.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
				.then(function(){
					Swal.fire({
						title: 'Thanks!',
						text: 'Post deleted successfully',
						icon: 'warning',
						confirmButtonText: 'OK'
					})
				})			
				.catch(function(error){
					console.log(error)
				})
			}
			return{ deletePost }
		}
	}
</script>