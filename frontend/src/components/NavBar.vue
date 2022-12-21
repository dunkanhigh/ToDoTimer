<template>

    <v-app-bar style="position:fixed">
        <v-spacer></v-spacer>
        <h3 class="font-weight-regular">FocusTimer</h3>
        <v-spacer></v-spacer>
        <h3 class="font-weight-regular">ToDos</h3>
        <v-spacer></v-spacer>
        <button @click="$router.push('/sign-up')" class='button1'> Sing Up</button>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>
<style lang="scss">
.button1 {
    color: green;
    border: 2px solid green;

}

.button1:hover {
    color: white;
    background-color: green;
}
</style>