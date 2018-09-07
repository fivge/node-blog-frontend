<template>
  <div id="users">
    <h1>{{ name }}</h1>
    <p>hello, {{ name }}</p>
  </div>
</template>

<script>
import axios from "axios";

const blog = `http://localhost:3000`;

export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    this.getUser();
  },
  mounted() {},
  methods: {
    getUser() {
      axios.get(`${blog}/users/${this.$route.params.name}`).then(r => {
        this.name = r.data;
      });
    }
  }
};
</script>

<style scoped>
#users {
  padding: 50px;
}
</style>