<template>
    <div class="container nav-container">
        <b-navbar toggleable="lg" class="qa-nav mt-0">
            <slot name="back"></slot>
            <b-navbar-brand @click="$router.push({name:'Home'})"><img src="@/assets/qa-logo.png" class="qa-logo" /></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"><span class="dots-group"><span class="dots">:</span><span class="dots">:</span></span></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav >
                <b-navbar-nav class="ml-auto qa-nav-group align-items-lg-center">
                    <b-nav-item href="javascript:void(0)" @click="$router.push({name:'Home',query:{'section':'map'}})" v-scroll-to="'#map'" class="mx-md-2 mx-xl-3">Cases</b-nav-item>
                    <b-nav-item href="javascript:void(0)" @click="$router.push({name:'Home',query:{'section':'about'}})" v-scroll-to="'#about'" class="mx-md-2 mx-xl-3">About</b-nav-item>
                    <b-nav-item href="javascript:void(0)" @click="$router.push({name:'Home',query:{'section':'support'}})" class="mx-md-2 mx-xl-3" v-scroll-to="'#support'">Support</b-nav-item>
                    <b-nav-item href="javascript:void(0)" v-if="$route.name==='Home'&&!this.getUserInfo"  class="hallow" id="want-to-help" @click="onVolunteerClick">I want to help</b-nav-item>
                    <b-nav-item href="javascript:void(0)" class="filled" @click="onRequestClick">I need help</b-nav-item>
                    <b-nav-item href="javascript:void(0)" v-if="this.getUserInfo" class="d-block d-md-none" @click="doLogOut">Log out</b-nav-item>
                    <b-nav-item href="javascript:void(0)" :class="{'d-none':$route.name==='Volunteer'}" class="default-user d-lg-inline" @click="onProfileClick"><ProfilePicture/></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
    import {BNavbar,BNavbarBrand,BNavbarToggle,BCollapse,BNavbarNav,BNavItem} from 'bootstrap-vue';
    import {mapGetters, mapMutations, mapState} from "vuex";
    import { isAndroid,isIOS } from 'mobile-device-detect';
    import ProfilePicture from "./ProfilePicture";
    export default {
        name: "TopNav",
        components:{
            BNavbar,BNavbarBrand,BNavbarToggle,BCollapse,BNavbarNav,BNavItem,ProfilePicture
        },

        methods:{
            ...mapMutations('global',['setCurrentBottomSheet','setShowModal']),
            ...mapMutations('account',['updateUserObject']),
            onVolunteerClick(){
                this.setCurrentBottomSheet('AuthButtonHelping');
                this.setShowModal(true)
            },
            onRequestClick(){
                if(this.getUserInfo){
                    if(isAndroid||isIOS){
                        this.$router.push({'name':'MobCreateReq'})
                        return;
                    }
                    this.setCurrentBottomSheet('ReqForm');
                }else {
                    this.setCurrentBottomSheet('AuthButtonNeedHelp');
                }
                this.setShowModal(true)
            },
            onProfileClick(){

                if(this.getUserInfo){
                    if(this.$route.name==="Home"){
                        this.$router.push({name:"Volunteer"})
                    }else{
                        this.setCurrentBottomSheet('EditProfile');
                        this.setShowModal(true)

                    }
                }else {
                    this.setCurrentBottomSheet('ProfileSignin');
                    this.setShowModal(true)

                }

            },
            doLogOut(){
                localStorage.clear();
                this.updateUserObject(null);
                this.$router.replace({name:"Home"})

            }
        },
        computed:{
            ...mapGetters('account',['getUserInfo']),
           /* userPicture:{
                get(){
                    return
                }
            }*/
        }
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .nav-container{
        @include media-breakpoint-down(sm) {
           padding: 0;
            & .navbar{
                border-radius: 0;
            }
            &+.container{
                margin-top: 0;
            }
        }

    }
    .qa-nav{
        /*margin-top: 50px;*/
        border-radius: 20px;
        box-shadow: 0 20px 40px -10px rgba(139, 142, 149, 0.1);
        border: solid 1px #f2f4f8;
        background-color: #ffffff;
        top: 20px;
        @include media-breakpoint-down(md) {
            margin-top: 15px;
        }

        @include media-breakpoint-down(sm) {
            top: 0;
        }

        .navbar-toggler{
            border: none;
            background: #685bb6;
            border-radius: 4px;
            padding: 8px 10px;
            font-size: 20px;
            font-weight: bold;
            color: white;
            .navbar-toggler-icon{
                background-image: none!important;
            }
            .dots{
               margin: 0 2px;
            }
            &[aria-expanded='false']{
                span.dots-group{
                    display: block;
                    transform: rotate(0deg);
                    transition: transform 0.5s ease-in-out;
                }
            }
            &[aria-expanded='true']{
                span.dots-group{
                    display: block;
                    transform: rotate(180deg);
                    transition: transform 0.5s ease-in-out;
                }
            }
        }

    }
    .qa-logo{
        width: 150px;
        height: auto;
        @include media-breakpoint-down(sm) {
            width: 119px;
            height: 40px;
        }
    }
    .qa-nav-group{
        a{
            /*font-family: Inter;*/
            font-size: 16px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: -0.01px;
            opacity: 1.0;
        }
        .hallow a , .filled  a{
            padding: 13px 30px;
        }
        .hallow {
            border-radius: 20px;
            margin-left: 100px;
            border: solid 2px #ffe58c;
            @include media-breakpoint-down(lg){
                margin-left: 25px;
            }
            @include media-breakpoint-down(md) {
                margin: 0 8px;
                border: none;
                a{
                    padding: 8px 0;
                }
            }
            @include media-breakpoint-down(sm){
                margin: 0
            }
        }
        .default-user{
            a{
                padding: 0;
            }
            margin-left: 50px;
            @include media-breakpoint-down(md) {
                margin: 8px 0;
            }
        }
        .filled{
            border-radius: 20px;
            background-color: #ffe58c;
            margin-left: 20px;
            @include media-breakpoint-down(md) {
                margin: 0 8px;
                border: none;
                border-radius: 0;
                background: none;
                a{
                    padding: 8px 0;
                }
            }
            @include media-breakpoint-down(sm){
                margin: 0
            }
        }
    }
</style>