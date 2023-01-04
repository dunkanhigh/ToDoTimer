<template>
    <div class="sign-in mt-8">
        <v-row justify="center">
            <v-col cols="12" xs="10" sm="5" md="3" lg="2">
                <span class="text-h4" style="color: teal;">
                    Sing In to FocusTimer
                </span>
                <v-card class="pa-5" elevation="7">
                    <v-form v-on:submit.prevent="SumbitForm" v-model="valid" lazy-validation>
                        <v-text-field v-model="username" label="Username" required></v-text-field>
                        <v-text-field v-model="password" label="Password"
                            :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" required
                            :type="show1 ? 'text' : 'password'" :rules="passwordRules"
                            @click:append-inner="show1 = !show1"></v-text-field>
                        <v-btn type="sumbit" :disabled="!valid" color="success" class="mr-4">
                            Sign In
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>

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
                username: this.username,
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