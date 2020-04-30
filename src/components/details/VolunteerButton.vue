<template>
    <div class="d-flex justify-content-center my-5">
        <button class="btn btn-yellow align-self-center btn-block" @click="onBtnClick">I would like to Volunteer</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        props:{
            detail:{
                type:Object,
                required:true
            }
        },
        name: "VolunteerButton",
        methods:{
            ...mapMutations('global',['setCurrentBottomSheet','setShowModal']),
            ...mapActions('cards',['wouldVolunteer']),
            onBtnClick(){
                if(this.getUserInfo){
                    // console.log(this.detail._id)
                    if(this.$route.name!=='Home'){
                        this.wouldVolunteer(this.detail._id);
                    }else{
                        this.$router.push({name:'Volunteer'})
                    }
                }else{
                    this.setCurrentBottomSheet('ProfileSignin');
                    this.setShowModal(true)
                }
            }
        },
        computed:{
            ...mapGetters('account',['getUserInfo'])
        }
    }
</script>

<style scoped lang="scss">
.btn-vol{
    padding: 15px 30px;
}
</style>