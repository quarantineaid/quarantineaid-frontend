<template>
    <button class="auth-btn p-0 d-flex align-items-center" @click="onLoginClick">
            <img src="@/assets/facebook-logo.png" alt="">
            <span>Facebook</span>
    </button>
</template>

<script>
    import * as Facebook from "fb-sdk-wrapper";
    import {mapActions} from "vuex";

    export default {
        name: "FacebookLogin",
        methods: {
            ...mapActions('account',['signInFb']),
            async onLoginClick() {
                if (localStorage.getItem("usr")) {
                    const authJson = JSON.parse(localStorage.getItem("auth"));
                    if (Object.keys(authJson).indexOf("accessToken") > -1) {
                        this.$router.replace("Volunteer")
                    }
                } else {
                    const response = await Facebook.login({
                        scope: 'public_profile,email',
                        return_scopes: true
                    });
                    if (response.status === 'connected') {
                        const {authResponse} = response;
                        this.signInFb({token:authResponse.accessToken});
                        // localStorage.setItem("usr", JSON.stringify(authResponse))
                        // this.$router.replace("Volunteer")
                    }
                }

            }
        }
    }
</script>

<style scoped>

</style>