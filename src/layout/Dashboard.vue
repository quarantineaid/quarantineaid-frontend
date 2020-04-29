<template>
    <div class="d-flex flex-column h-100">
        <TopNav @showBottomSheet="showBottomSheet"></TopNav>
        <main class="container p-0 px-md-3 mt-md-4 h-100 flex-grow-1">
            <div class="d-flex row title-action flex-column flex-md-row align-items-center flex-shrink-1">
               <div class="col d-flex align-items-center profile-wrap">
                   <ProfilePicture class="d-block d-lg-none"/><h3 class="my-4 my-md-1 text-left">{{this.userName}}’s <br  class="d-block d-md-none"/>profile</h3>
               </div>
                <div class="col mb-3 mb-lg-0 ml-lg-auto d-flex flex-md flex-md-row align-items-center px-3 justify-content-lg-end">
                    <div class="d-flex button-grp align-items-lg-center">
                        <button class="btn-helping shadow-none" :class="{'active':currentLayout==='helping'}" @click="changeLayoutType('helping')">helping</button>
                        <button class="btn-help shadow-none" :class="{'active':currentLayout==='getting_help'}" @click="changeLayoutType('getting_help')">getting help</button>
                    </div>
                    <button class="btn btn-sm filter d-block d-lg-none"><img src="@/assets/control.png" alt=""></button>
                    <button v-if="isHelping" class="btn btn-sm d-block d-lg-none" @click="onToggleMap"><img :src="require(`@/assets/${showMap?'list.svg':'map.svg'}`)" alt=""></button>
                    <button class="d-none d-lg-block btn btn-logout ml-md-4 my-4 my-md-0 " @click="doLogOut">Logout</button>
                </div>
            </div>
            <card-detail :currentTab="currentLayout" :tabConfig="tabConfig" @showBottomSheet="showBottomSheet"></card-detail>
        </main>
        <BottomSheet v-model="show"></BottomSheet>
    </div>
</template>

<script>
    import TopNav from '../components/TopNav'
    import BottomSheet from '../components/BottomSheet'
    import CardDetail from "../components/CardDetail";
    import {getTabConfig} from '../utils/index';
    import {mapGetters, mapMutations, mapState} from 'vuex';
    import ProfilePicture from "../components/ProfilePicture";
    import {pathOr} from "ramda";

    export default {
        name: "DashboardLayout",
        components:{
            CardDetail,
            TopNav,BottomSheet,
            ProfilePicture
        },
        methods:{
            ...mapMutations('global',['setCurrentLayout','setShowMap']),
            ...mapMutations('account',['updateUserObject']),
            onToggleMap(){
                this.setShowMap(!this.showMap)
            },
            showBottomSheet(){
                this.show = true;
            },
            changeLayoutType(type){
                this.setCurrentLayout(type);
                this.changeBg();
            },
            changeBg(){
                if(this.currentLayout === 'helping'){
                    document.querySelector("body").classList.remove("yellow-bg");
                    document.querySelector("body").classList.add("purple-bg");
                }else{
                    document.querySelector("body").classList.remove("purple-bg");
                    document.querySelector("body").classList.add("yellow-bg");
                }
            },
            doLogOut(){
                localStorage.clear();
                this.updateUserObject(null);
                this.$router.replace({name:"Home"})
            }
        },
        data(){
            return{
                show:false,
            }
        },

        computed:{
            ...mapState('global',['currentLayout','currentTab','currentTab','showMap']),
            ...mapGetters('global',['isHelping']),
            ...mapGetters('account',['getUserInfo']),

            tabConfig:{
                get:()=>getTabConfig()

            },
            userName(){
                return pathOr(null,['info','user','name'],this.getUserInfo)
            }
        },
        mounted() {
                this.changeBg();
        },
        destroyed() {
            document.querySelector("body").classList.remove("purple-bg")
        }
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .profile-wrap{
        margin-right: auto;
    }

    .btn-sm{
        display: inline-flex;
        width: 40px;
        height: 40px;
        background: #ffffff;
        border-radius: 13.3px;
        &.filter{
            margin-left: auto;
            margin-right: 10px;
        }
        img{
            width: 100%;
            height: auto;
        }
    }

    .yellow-bg{
        .btn-helping{

        }
    }

    .dashboard-layout{
        height: 100vh;
    }
    .purple-bg{
        .title-action{

            h3{
                color: #ffffff;

            }
        }
    }
.title-action{
    margin: 2rem 0;
    @include media-breakpoint-down(sm) {
        margin: 0.5rem 0;
    }
    h3{
        font-family: Inter;
        font-size: 35px;
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: -0.02px;
        text-align: center;
        color: #2b2a35;
        @include media-breakpoint-down(md) {
            font-size: 22px;
            text-align: left;
            margin: 1rem auto 1rem 1rem;

        }
        @include media-breakpoint-down(sm) {
        }
    }
    .btn.btn-logout{
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: -0.01px;
        color: #2b2a35;
        background: #ffffff;
        padding: 12px;
        border-radius: 20px;
    }
    .button-grp{
        background-color: rgba(255, 255, 255, 0.2);
        border: 2px solid #ffffff;
        border-radius: 20px;
        overflow: hidden;
        width: 213px;
        height: 48px;
        @include media-breakpoint-down(sm) {
            border-radius: 13.3px;
            height: 40px;
        }
        .btn{
            &-helping,&-help{
                background: none;
                border: none;

                font-size: 16px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: -0.01px;
                line-height: 15px;
                @include media-breakpoint-down(sm) {
                    border-radius: 13.3px;
                    font-size: 14px;

                }
                &:active,&:focus{
                    outline: none;
                }
                /*padding: 10px 0px;*/
                &.active{
                    color: #3a3547;
                    background: #ffffff;
                    height: 44px;
                    @include media-breakpoint-down(sm) {
                        /*border-radius: 13.3px;*/
                        height: 37px;

                    }
                }

            }
            &-helping{
                /*padding: 12px;*/
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                @include media-breakpoint-down(sm) {
                    border-top-right-radius: 13.3px;
                    border-bottom-right-radius:13.3px;
                    height: 37px;
                }
                width: 91px;
                flex-shrink: 0;
            }
            &-help{
                flex-grow: 1;
                /*width: 375px;*/
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                @include media-breakpoint-down(sm) {
                    border-top-left-radius: 13.3px;
                    border-bottom-left-radius:13.3px;
                }
            }
        }
    }
}
</style>