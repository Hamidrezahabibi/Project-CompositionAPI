<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6">
                <form @submit.prevent = "validation">
                    <div class="text-left">
                        <label for="title" class="form-group">Title</label>
                        <input type="text" class="form-control" id="title" v-model.lazy.trim="form.title">
                        <small id="titleHelp" class="form-text text-danger">{{ form.titleError }}</small>
                    </div>
                    <br>
                    <br>
                    <div class="form-group text-left">
                        <label for="body">Body</label>
                        <textarea type="text" class="form-control" id="body" rows="6" v-model.lazy.trim="form.body"></textarea>
                        <small id="bodyHelp" class="form-text text-danger">{{ form.bodyError }}</small>
                    </div>
                    <button type="submit" class="btn btn-dark">
                        <div v-if="loading" class="spinner-border spinner-border-sm text-white" role="status" :disabled="loading">
                            <span class="sr-only"></span>
                        </div>
                        Creat Post
                    </button>
                </form>
            </div>    
        </div>
    </div>
    
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name:"create",
    setup(){
        const form = reactive({
            title : "",
            titleError : "",
            body : "",
            bodyError : ""
        });

        const loading = ref(false);

        function validation(){
            if (form.title === ""){
                form.titleError="title is required" 
            }else{
                form.titleError=""
            }
             if (form.body === ""){
                form.bodyError="body is required"
            }else{
                form.bodyError=""
            }
            if (form.title !== "" && form.body !== ""){
                loading.value = true;
                createPost();
            }
        }

        function createPost(){
            axios
            .post('https://jsonplaceholder.typicode.com/posts',{
                title: form.title,
                body: form.body,
                userId: 1,
            })
            .then(function(response){
				loading.value = false;

                Swal.fire({
                    title: 'Thanks!',
                    text: 'Post created successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
			})		
			.catch(function(error){
				console.log(error);
			});
        }
        
        return {form,loading,validation};
    }

}
</script>

<style>

</style>