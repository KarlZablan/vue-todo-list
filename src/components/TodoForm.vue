<template>
  <b-container>
    <b-row>
      <b-col align-self: center>
        <b-input-group id="detailsInput" size="sm" prepend="Iyang sugo" class="mt-3">
          <b-form-input
            id="input-details"
            v-model="details"
            :state="isValid "
            aria-describedby="input-details-feedback"
          ></b-form-input>
          
          <b-input-group-append>
            <b-button variant="primary" :disabled="!isValid" size="sm" @click="save">Save</b-button>
            <b-button variant="danger" size="sm" @click="cancel">Cancel</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-popover v-if="!isValid" target="detailsInput" triggers="hover"  placement="top">
            butangi pud guro no
          </b-popover>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    todo: null
  },
  data() {
    return {
      details: ""
    };
  },
  computed: {
    isValid() {
      return this.details.trim().length > 0;
    }
  },
  methods: {
    save() {
      if (!this.todo) {
        this.$store.commit("create", this.details);
      } else {
        let data = { id: this.todo.id, details: this.details };
        this.$store.dispatch("update", data);
      }

      this.$router.go(-1);
    },
    cancel() {
      this.$router.go(-1);
    }
  },
  created() {
    this.details = !this.todo ? "" : this.todo.details;
  }
};
</script>

<style>
</style>