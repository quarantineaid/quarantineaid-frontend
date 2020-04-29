<template>
    <div class="container-fluid p-0 auth">
        <div class="row m-0">
            <div class="col-12 col-lg-6 p-5 d-flex justify-content-center align-items-center">
                <div class="row d-flex justify-content-center align-items-center align-self-center">
                    <div class="col-12 col-lg-8">
                        <div class="text-center">
                            <h4>make difference</h4>
                        </div>

                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="text-center">
                            <div class="oval"></div>
                            <h4>as an organisation</h4>
                            <p>
                                Partner with us to help out with finances or logistics and various 
                                other immediate essential services.
                            </p>
                        </div>

                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="text-center">
                            <div class="oval"></div>
                            <h4>as an individual</h4>
                            <p>
                                You can post occurrences of people in need of help and support groups 
                                can reach out to them. Refer us to others who can help out too. That 
                                way we pay it forward.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex p-0">
                <div class="flex-fill p-5 yellow-bg br-50 bl-50 d-flex justify-content-center align-items-center">
                    <div class="col-12 col-xl-8">
                        <h1 class="text-center"> use your social accounts to login</h1>
                       <div class="d-flex justify-content-center flex-column align-items-center">
                           <FacebookLogin></FacebookLogin>
                           <GoogleLogin></GoogleLogin>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import FacebookLogin from "../FacebookLogin";
    import GoogleLogin from "../GoogleLogin";

    export default {
        name: "AuthButton",
        components: {
            FacebookLogin,
            GoogleLogin
        },
        props:{
            desc:{
                type:Object
            }
        }
    }
</script>

<style scoped lang="scss">
    .auth {
        h1 {
            font-family: Inter;
            font-weight: 800;
            font-stretch: normal;
            font-style: normal;
        }



    }
</style>