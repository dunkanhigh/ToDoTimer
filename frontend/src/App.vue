<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  border-radius: 8px;
  padding: 8px 8px;
  transition-duration: 0.4s;
}
</style>
<script>
import axios from 'axios'
import NavBar from './components/NavBar.vue'
export default {
  name: "App",
  components: { NavBar },
  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    }
    else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
}
</script>