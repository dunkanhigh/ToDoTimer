<template>
  <v-app>
    <v-main>
      <NavBar />
      <ToDoList />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ToDoList from './components/ToDoList.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    ToDoList
  },

  data: () => ({
    //
  }),
}
</script>
