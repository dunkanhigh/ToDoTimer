<template>
    <div class="sign-up mt-8">
        <v-row justify="center">
            <v-col cols="12" xs="10" sm="5" md="3" lg="2">
                <span class="text-h4" style="color: teal;">
                    Sing Up to FocusTimer
                </span>
                <v-card class="pa-5" elevation="7">
                    <v-form v-on:submit.prevent="SumbitForm" ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="username" label="Username" :rules="rules.UsernameRules"></v-text-field>
                        <v-text-field v-model="firstname" label="First Name"
                            :rules="rules.FirstNameRules"></v-text-field>
                        <v-text-field v-model="lastname" label="Last Name" :rules="rules.LastNameRules"></v-text-field>
                        <v-text-field v-model="email" :rules="rules.emailRules" label="E-mail" required></v-text-field>
                        <v-text-field v-model="password" class="input-group--focused" name="password"
                            :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="rules.passwordRules"
                            :type="show1 ? 'text' : 'password'" label="Password" @click:append-inner="show1 = !show1"
                            required>
                        </v-text-field>
                        <v-btn type="sumbit" :disabled="!valid" color="success" class="mr-4">
                            Sign Up
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
    name: 'SignUp',
    data() {
        return {
            show1: false,
            valid: true,
            username: "",
            firstname: '',
            lastname: '',
            password: "",
            email: "",
            rules: {
                passwordRules: [
                    p => !!p || 'Password is required',
                    p => (p && 6 <= p.length) || 'Name must be more than 5 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                FirstNameRules: [
                    n => !!n || 'First Name is required'
                ],
                LastNameRules: [
                    n => !!n || 'Last Name is required'
                ],
                UsernameRules: [
                    u => !!u || 'Username is required',
                    u => /^[a-zA-Z0-9_.]{1,30}$/.test(u) || 'Username must contain only letters and digits',
                ]
            }
        }
    },
    methods: {
        SumbitForm() {
            const formData = {
                first_name: this.firstname,
                last_name: this.lastname,
                email: this.email,
                password: this.password,
                username: this.username,
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