<template>
  <div class="table">
    <div class="row">
      <div class="cell"></div>
      <div class="cell">
        <h4>MGA SUGO NI MAMA:</h4>
        <hr />
        <button @click="newTodo">New</button>
        <div v-for="todo in todos" v-bind:key="todo.id">
          <app-todo class="todo" :todo="todo" />
        </div>
      </div>
      <div class="cell"></div>
    </div>
  </div>
</template>

<script>
import TodoVue from "./Todo.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-todo": TodoVue
  },
  computed: {
    ...mapGetters({
      todos: "getTodos"
    })
  },
  methods: {
    newTodo() {
      this.$router.push({ name: "new" });
    }
  }
};
</script>

<style>
.todo {
  background-color: gainsboro;
}

.table {
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}
.row {
  display: table-row;
}
.cell {
  display: table-cell;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}
</style>