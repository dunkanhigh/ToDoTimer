<template>
    <v-app-bar>
        <v-spacer></v-spacer>
        <h3 class="font-weight-regular">FocusTimer</h3>
        <v-spacer></v-spacer>
        <h3 class="font-weight-regular">ToDos</h3>
        <v-spacer></v-spacer>
        <div v-if="this.$store.state.isAuthenticated">
            <p>isAuthenticated</p>
        </div>
        <div v-else>
        </div>
        <!-- <button style="margin-right:2px ;" @click="$router.push('/sign-in')" class='button1'> Logout</button> -->
        <LogOut />
        <button style="margin-right:2px ;" @click="$router.push('/sign-in')" class='button1'> Sing In</button>
        <button @click="$router.push('/sign-up')" class='button2'> Sing Up</button>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>
<script>
import LogOut from '../components/LogOut.vue'
export default {
    name: 'NavBar',
    components: {
        LogOut
    }
}   
</script>
<style lang="scss">
.button1 {
    color: teal;
    border: 2px solid teal;

}

.button1:hover {
    opacity: 0.6;
}


.button2 {
    color: black;
    background-color: teal;
}

.button2:hover {
    opacity: 0.6;
}
</style>