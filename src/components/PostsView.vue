<template>
	<div class="card" style="width: 70rem;">
	  <div class="card-header">
	  	<router-link :to="{name:'postId' , params:{id:post.id}}"> {{ post.title }} </router-link>
	  </div>
	  <ul class="list-group list-group-flush">
	    <li class="list-group-item">Body: {{ post.body }}</li>
	  </ul>
	</div>
</template>

<script>
	export default {
		props: {
			post:Object
		}
	}
</script>