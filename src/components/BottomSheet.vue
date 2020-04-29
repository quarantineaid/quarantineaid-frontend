<template>
    <div class="bottom-sheet" :class="{
        active:this.canShow
    }">
        <div class="bottom-sheet-cover d-flex align-items-end">
            <transition name="show">
                <div v-if="canShow" class="bottom-sheet-wrap">
                    <button class="btn close-button" @click="hideBottomSheet">X</button>
                    <div class="bottom-sheet-wrap d-flex flex-column flex-fill">
                        <vue-scroll >
                            <component :is="currentBottomSheet" @triggerClose="hideBottomSheet"></component>
                        </vue-scroll>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import comps from '../components/global';
    import {mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: "BottomSheet",
        components:{
            ...comps
        },
        methods: {
            ...mapMutations('global',['setShowModal','setCurrentBottomSheet']),
            ...mapMutations('account',['updateOTPSent']),
            hideBottomSheet() {
                this.setShowModal(false);
                // this.$emit("input", false);
            },
            onStorageChange(){
                // debugger;
            }
        },
        showListView() {
            if (screen.width < 768) {
                this.showList = true;
                this.showDetails = false;
            }
        },
        watch:{
            user(newVal){
                debugger;
                if(newVal){
                    if(newVal.info.user.phoneVerify.verified){
                        this.hideBottomSheet();
                        this.$router.replace({name:"Volunteer"});
                        this.updateOTPSent(false);
                    }else{
                        this.setCurrentBottomSheet('RequestPhone')
                    }
                   /* this.hideBottomSheet();
                    this.$router.replace({name:"Volunteer"})*/
                }
            },
            OTPSent(newVal){
                debugger;
                if(newVal){
                    this.setCurrentBottomSheet('VerifyOTP')
                }
            }
        },
        computed: {
            ...mapState('global',['currentBottomSheet','showModal']),
            ...mapState('account',['user','OTPSent']),

            canShow: {
                get() {
                    if (this.showModal) {
                        document.querySelector("body").classList.add("overflow-hidden")
                    } else {
                        document.querySelector("body").classList.remove("overflow-hidden")
                    }
                    return this.showModal
                }
            }
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
    .bottom-sheet {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: -9999;
        /*display: none;*/
        overflow: hidden;
        opacity: 0;
        transition: all 0.5s ease-in;
        transition-delay: 0.2s;

        &.active {
            opacity: 1;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }

        &-cover {
            width: 100%;
            height: 100vh;
            position: relative;
            background: rgba(104, 91, 182, 0.2);
            backdrop-filter: blur(50px);

        }

        .btn.close-button {
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            top: -80px;
            width: 60px;
            height: 60px;
            border-radius: 20px;
            box-shadow: 0 20px 40px -10px rgba(139, 142, 149, 0.1);
            border: solid 1px #f2f4f8;
            background-color: #ffffff;

        }

        &-wrap {
            width: 100%;
            min-height: 100px;
            background: #ffffff;
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
            transition: transform 0.5s ease;
            /*transition-delay: 0.1s;*/
            position: relative;
            max-height: 85vh;
            .bottom-sheet-wrap{
                height: 100%;
                /*padding: 20px;*/
                overflow: hidden;
            }
        }

        .show-enter {
            transition: transform 0.5s ease;
            /*transition-delay: 0.1s;*/
            transform: translateY(999px);
            opacity: 0;
        }

        .show-leave-active {
            transition: transform 0.5s ease;
            /*transition-delay: 0.1s;*/
            transform: translateY(999px);
            opacity: 0;
        }
    }
</style>