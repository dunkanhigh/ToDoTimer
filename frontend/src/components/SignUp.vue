<template>
    <div>
        <v-form v-on:submit.prevent="SumbitForm">

        </v-form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            name: "",
            surname: '',
            email: '',
            password: '',
        }
    },
    methods: {
        SumbitForm() {
            const formData = {
                email: this.email,
                username: this.email,
                password: this.password,
                name: this.name,
                surname: this.surname
            };
            axios
                .post('api/v1/token/login', formData)
                .then(response => {
                    this.$router.push('/sing-in')
                    console.log(response)
                }
                .catch()
                )
        }

    }
}
</script>