<template>
  <div>
      <p>{{todo.details}}</p>
      <button class="edit" @click="editTodo">Edit</button>
      <button class="delete" @click="deleteTodo">Delete</button>
  </div>
</template>

<script>

export default {
    props:{
        todo: Object
    },
    methods:{
        editTodo(){
            this.$router.push({name:'edit', params: {todo: this.todo}});
        },
        deleteTodo(){
            this.$store.commit('delete', this.todo)
        }
    }
}
</script>

<style>

</style>