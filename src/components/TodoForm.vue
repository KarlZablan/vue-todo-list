<template>
  <div>
    <label for="details">Iyang sugo: </label>
    <input type="text" id="details" v-model="details" />
    <button @click="save">Save</button>
    <button @click="cancel">Cancel</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: null
  },
  data(){
      return{
          details: ''
      }
  },

  methods: {
    
    save() {
        if (!this.todo) {
            this.$store.commit('create', this.details);
        }
        else{
            let data = {id:this.todo.id, details: this.details};
            this.$store.dispatch('update', data);
        }

        this.$router.go(-1)
    },
    cancel() {this.$router.go(-1)}
  },
  created(){
        this.details = !this.todo ? '' : this.todo.details;
    },
};
</script>

<style>
</style>