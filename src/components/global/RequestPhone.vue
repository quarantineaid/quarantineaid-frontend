<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 my-5">
            <h1 class="heading text-center">Verify your Phone number</h1>
            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="onSubmit">
                <div class="text-center">
                    <ProfilePicture class="oval"/>
                </div>
                <div class="mb-3">
                    <ValidationProvider rules="required|usetel" v-slot="{ errors }">
                        <label for="phone">your Phone number</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">+91</span>
                            </div>

                            <input class="form-control" id="phone" min="10" name="phone" placeholder="Phone" required
                                   type="tel" v-model="phone"/>
                        </div>
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>

                <!--<label for="phone"></label>
                <div class="form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">+91</span>
                    </div>
                    <ValidationProvider rules="usetel" v-slot="{ errors }">
                        <input id="phone" v-model="phone" name="phone" min="10" type="tel" class="form-control" placeholder="Phone"/>
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>-->
                <div class="form-group">
                    <button :disabled="invalid" class="btn btn-primary btn-block btn-purple">Verify Phone</button>
                </div>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
    import ProfilePicture from "../ProfilePicture";
    import {extend} from 'vee-validate';
    import {mapActions} from "vuex";

    // const telRegex = new RegExp("^(?:(?:\\+|0{0,2})91(\\s*[\\ -]\\s*)?|[0]?)?[789]\\d{9}|(\\d[ -]?){10}\\d$");

    /* extend('indtel', value => {
         if (telRegex.test(value)) {
             return true;
         }

         return 'This field must be a valid phone no.';
     });*/

    export default {
        name: "RequestPhone",
        components: {
            ProfilePicture
        },
        data() {
            return {
                phone: null
            }
        },
        methods:{
            ...mapActions('account',['verifyPhone']),
            onSubmit(){
                this.verifyPhone({phone:this.phone})
            }
        }
    }
</script>

<style scoped>

</style>