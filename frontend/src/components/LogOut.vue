<template>
    <button @click.prevent="SubmitForm" class="button">Logout</button>
</template>
<script>
import axios from 'axios';

export default {
    name: 'LogOut',
    methods: {
        SubmitForm() {
            axios
                .post('/api/v1/token/logout/')
                .then(response => {
                    this.$store.commit('removeToken')
                    axios.defaults.headers.common['Authorizations'] = ''
                    localStorage.setItem('token', '')
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
<style>
.button {
    color: teal;
    border: 2px solid teal;
}

.button:hover {
    opacity: 0.6;
}
</style>