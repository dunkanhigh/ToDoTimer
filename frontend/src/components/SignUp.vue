<template>
    <div class="sign-up">
        <form v-on:sumbit.prevent="sumbitForm">
            <input type="email" name='email' v-model='email' />
            <input type='password' name="password" v-model='password' />
            <button type="sumbit">Sign up</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
        return {
            username: "",
            password: "",
            email: ""
        };
    },
    methods: {
        sumbitForm() {

            const formData = {
                email: this.email,
                username: this.email,
                password: this.password,
            };
            axios
                .post("api/v1/users/", formData)
                .then(response => {
                    this.$router.push("/log-in");
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
}
</script>