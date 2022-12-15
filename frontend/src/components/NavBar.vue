<template>

    <v-app-bar absolute>
        <v-toolbar-title>FocusTimer</v-toolbar-title>
        <a>
            <h3 class="font-weight-regular">ToDos</h3>
        </a>
        <v-spacer></v-spacer>
        <!-- <v-btn to="/sign-in">
                Sign In
            </v-btn> -->

        <button @click="$router.push('/sign-up')" class='button1'> Sing Up</button>

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