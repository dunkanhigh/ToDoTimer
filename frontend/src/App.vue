<template>
  <v-app>
    <NavBar />
    <router-view />
  </v-app>
  <!-- <nav>
    <router-link to="/sign-in">Sign In</router-link> |
    <router-link to="/sign-up">Sign Up</router-link>
  </nav> -->
  <!-- <router-view /> -->
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    // &.router-link-exact-active {
    //   color: #42b9  83;
    // }
  }
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