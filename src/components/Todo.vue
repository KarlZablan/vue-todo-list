<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="text-left" cols="8">
          <b-form-checkbox
            :id="'checkbox-' + todo.id"
            size="lg"
            name="checkbox-1"
            v-model="todo.isFinished"
            @click="chkFinishedClicked"
          >{{todo.details}}</b-form-checkbox>
        </b-col>
        <b-col class="text-right">
          <b-button pill :disabled="todo.isFinished" :variant="btnEditVariant" size="sm" class="edit" @click="editTodo" v-b-modal.todoForm>Edit</b-button>
          <b-button pill variant="outline-danger" size="sm" class="delete" @click="deleteTodo">Delete</b-button>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  computed:{
    btnEditVariant(){
      return  this.todo.isFinished ? 'outline-secondary' : 'outline-primary';
    }
  },
  methods: {
    chkFinishedClicked() {
      console.log(this.todo.isFinished);
    },
    editTodo() {
      this.$router.push({ name: "edit", params: { todo: this.todo } });
    },
    deleteTodo() {
      this.$store.commit("delete", this.todo);
    }
  },
  created() {
    if (!this.todo) {
      this.isFinished = this.todo.isFinished;
    }
  }
};
</script>

<style>
</style>