<template>
    <div class="row d-flex justify-content-center align-items-center">
        <form class="col-8 col-md-6 col-lg-4 col-xl-3 my-5 " @submit.prevent="onOTPSubmit">
            <h1 class="heading text-center">OTP Sent</h1>
            <div class="otp-wrap mb-4 d-flex flex-column justify-content-center align-items-center">
                <OtpInput
                        :is-input-num="true"
                        :num-inputs="4"
                        :should-auto-focus="true"
                        @on-complete="handleOnComplete"
                        input-classes="otp-input mx-1"
                        ref="otpInput"
                        separator="-"
                />
            </div>
            <div class="form-group">
                <button :disabled="!otp" class="btn btn-primary btn-block btn-purple">Verify OTP</button>
            </div>
        </form>
    </div>
</template>

<script>
    import OtpInput from "@bachdgvn/vue-otp-input";
    import {mapActions} from "vuex";

    export default {
        name: "VerifyOTP",
        components: {
            OtpInput
        },
        data(){
            return {
                otp:null
            }
        },
        methods:{
            ...mapActions('account',['verifyOTP']),
            handleOnComplete(data){
                this.otp = data;
                debugger;
            },
            onOTPSubmit(){
                if(this.otp){
                    this.verifyOTP({otp:parseInt(this.otp)})
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.otp-wrap{
    max-width: 265px;
    margin: auto;
    input[type="number"]{
        width: 100px;
    }
}
</style>