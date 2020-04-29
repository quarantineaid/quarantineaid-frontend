<template>
    <button class="auth-btn p-0 d-flex align-items-center" @click="onGoogleSignin">
            <img src="@/assets/google-logo.png" alt="">
            <span>Google</span>
    </button>

</template>

<script>
    import {mapActions} from "vuex";

    export default {
        methods:{
            ...mapActions('account',['signInGl']),
            async onGoogleSignin(){

                const authCode = await this.$gAuth.signIn();
                const {id_token} = authCode.getAuthResponse();
                this.signInGl({token:id_token});

            }
        },
    }
</script>

<style scoped>

</style>