import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state: {
        todos: []
    },
    getters:{
        getTodos(state){
            return state.todos;
        }
    },
    mutations:{
         create(state, details){
            let todo = {id:state.todos.length, details:details};
            state.todos.push(todo);
         },
         update(state, todo){
            state.todos = state.todos.map(x=> x.id === todo.id ? {...x, details: todo.details} : x);
         },
         delete(state,todo){
            state.todos.splice(state.todos.indexOf(todo), 1);
         }
    },
    actions:{
        update(context, todo){
            context.commit('update', todo);
        },
        create(context, details){
            context.commit('create', details);
         },
         delete(context,todo){
            context.commit('delete', todo);
         }
    }
});