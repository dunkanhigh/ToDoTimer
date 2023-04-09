<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col col="12" lg='8' md='8' sm='10' xs="12" class="mx-auto" v-for="(todo, index) in todos" :key="index">
                <v-card class="pa-2" outlined tile>
                    {{ todo.title }}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ToDoList',
    computed: mapGetters(['todos']),
    beforeMount() {
        this.$store.dispatch('getToDos')
    }

}
</script>
<style>
</style>