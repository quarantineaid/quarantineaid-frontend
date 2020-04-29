<template>
    <div class="profile-picture">
        <img :src="imageSrc" />
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {pathOr} from 'ramda';
    export default {
        name: "ProfilePicture",
        computed:{
            ...mapGetters('account',['getUserInfo']),
            imageSrc:{
                get(){
                    return this.userProfile || require("@/assets/default-user.png")
                }
            },
            userProfile:{
                get(){
                    return pathOr(null,['info','user','picture'],this.getUserInfo)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";
.profile-picture{
    display: inline-flex;
    width: 50px;
    height: 50px;
    border-radius: 20px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @include media-breakpoint-down(sm) {
        font-size: 18px;
    }
}
</style>