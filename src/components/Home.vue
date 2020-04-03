<template>
  <b-container>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <h4>MGA SUGO NI MAMA:</h4>
        <!-- <hr />
        <b-button variant="primary" @click="newTodo">Bag-ong sugo</b-button>
        <hr /> -->
        <b-list-group v-for="todo in todos" v-bind:key="todo.id">
          <b-list-group-item>
            <app-todo id="todo.id" class="todo" :todo="todo" />
          </b-list-group-item>
        </b-list-group>
        <!-- <div v-for="todo in todos" v-bind:key="todo.id">
          <app-todo class="todo" :todo="todo" />
        </div>-->
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-icon 
    icon="plus-circle" 
    variant="primary" 
    @click="newTodo"
    v-b-popover.hover.top="'Bag-ong sugo'"
    font-scale="2"
    ></b-icon>
  </b-container>
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

</style>