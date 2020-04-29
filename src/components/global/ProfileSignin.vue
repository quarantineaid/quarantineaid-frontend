<template>
    <div class="container">
        <div class="row mx-0 d-flex align-items-center justify-content-center flex-column my-5">
            <div class="col-12 col-md-8">
                <h1 class="text-center">use your social accounts to login</h1>
                <div class="d-flex profile-signin justify-content-center flex-column flex-md-row align-items-center">
                    <FacebookLogin></FacebookLogin>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
       <!-- <div class="col-8 d-flex align-items-center flex-column justify-content-center">
           <div class="d-flex flex-fill flex-column">
               <h1 class="text-center"> use your  to login</h1>
               <div class="d-flex justify-content-center flex-column align-items-center">
                   <FacebookLogin></FacebookLogin>
                   <GoogleLogin></GoogleLogin>
               </div>
           </div>
        </div>-->
    </div>
</template>

<script>
    import FacebookLogin from "../FacebookLogin";
    import GoogleLogin from "../GoogleLogin";

    export default {
        name: "ProfileSignin",
        components:{
            FacebookLogin,
            GoogleLogin
        }
    }
</script>

<style scoped>

</style>