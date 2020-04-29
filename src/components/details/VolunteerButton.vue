<template>
    <div class="d-flex justify-content-center my-5">
        <button class="btn btn-yellow align-self-center btn-block" @click="onBtnClick">I would like to Volunteer</button>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        props:{
            detail:{
                type:Object,
                required:true
            }
        },
        name: "VolunteerButton",
        methods:{
            ...mapActions('cards',['wouldVolunteer']),
            onBtnClick(){
                // console.log(this.detail._id)
                this.wouldVolunteer(this.detail._id);
            }
        }
    }
</script>

<style scoped lang="scss">
.btn-vol{
    padding: 15px 30px;
}
</style>