<template>
    <div class="row d-flex my-5 m-0">
        <div class="col-12 col-md-6">
            <button class="btn btn-outline-yellow btn-block mb-4" @click="onBtnClick(false)">couldn’t help</button>
        </div>
        <div class="col-12  col-md-6">
            <button class="btn btn-yellow btn-block" @click="onBtnClick(true)">resolved</button>
        </div>
    </div>
</template>

<script>
    import {BAlert} from 'bootstrap-vue';
    import {mapActions} from "vuex";
    export default {
        props:{
            detail:{
                type:Object,
                required:true
            }
        },
        name: "VolunteerInterest",
        methods:{
            ...mapActions('cards',['updateVolunteerStatus']),
            onBtnClick(bool){
                // console.log(this.detail._id)
                this.updateVolunteerStatus({
                    "situationId": this.detail._id,
                    "resolved": bool
                });
            }
        }
    }
</script>

<style scoped>

</style>