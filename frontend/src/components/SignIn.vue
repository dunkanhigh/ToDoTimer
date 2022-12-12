<template>
    <div class="sign-in">
        <v-form v-on:sumbit.prevent="sumbitForm" ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" name="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules" :type="show1 ? 'text' : 'password'" label="Password"
                @click:append="show1 = !show1" required>
            </v-text-field>
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
                p => (p && 5 <= p.length) || 'Name must be more than 5 characters',
            ],
            email: "",
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        };
    },
    methods: {
        sumbitForm() {
            const formData = {
                username: this.email,
                password: this.password,
            };
            axios
                .post("/api/v1/login/", formData)
                .then(response => {
                    this.$router.push("/sing-in");
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
}
</script>