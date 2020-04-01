const state= {
    todos: []
}

const getters={
    getTodos(state) {
        return state.todos;
    }
}

const mutations={
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
}
const actions={
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

export default {
    state,
    getters,
    actions,
    mutations
  }