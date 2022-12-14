<template>
    <div class="sign-up">
        <v-form v-on:submit.prevent="SumbitForm">
            <v-text-field v-model="email" label="E-mail"></v-text-field>
            <v-text-field v-model="password" label="Password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
            <v-btn type="sumbit" :disabled="!valid" color="success" class="mr-4">
                Sign Up
            </v-btn>
        </v-form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            show1: false,
            valid: true,
            email: '',
            password: '',
        }
    },
    methods: {
        SumbitForm() {
            const formData = {
                username: this.email,
                password: this.password,
            };
            axios
                .post('/api/v1/users/', formData)
                .then(response => {
                    this.$router.push('/sign-in')
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })

        }

    }
}
</script>