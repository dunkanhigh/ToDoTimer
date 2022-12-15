<template>
    <div class="sign-in">
        <v-form v-on:submit.prevent="SumbitForm" v-model="valid" lazy-validation>
            <v-text-field v-model="email" label="E-mail" required :rules="emailRules"></v-text-field>
            <v-text-field v-model="password" label="Password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" required
                :rules="passwordRules"></v-text-field>
            <v-btn type="sumbit" :disabled="!valid" color="success" class="mr-4">
                Sign In
            </v-btn>
        </v-form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "SignIn",
    data() {
        return {
            show1: false,
            valid: true,
            username: "",
            password: "",
            passwordRules: [
                p => !!p || 'Password is required',
            ],
            email: "",
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        };
    },
    methods: {
        SumbitForm() {
            const formData = {
                username: this.email,
                password: this.password,
            };
            axios
                .post("/api/v1/token/login/", formData)
                .then(response => {

                    const token = response.data.auth_token

                    this.$store.commit('setToken', token)

                    axios.defaults.headers.common['Authorizations'] = 'Token ' + token

                    localStorage.setItem('token', token)

                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
}
</script>