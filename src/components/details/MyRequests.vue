<template>
    <div class="volunteers-list my-5">
        <h1 class="m-0">volunteers</h1>
        <p class="text-muted">You can only accept help from one person at once.</p>
        <Volunteers v-for="(volunteer,index) in acceptedByVolunteer" :category="detail.type" :key="index" :picture="volunteer.picture" :situation-id="detail._id" :name="volunteer.name" :volunteer-id="volunteer._id"></Volunteers>
        <!--<Volunteers></Volunteers>
        <Volunteers></Volunteers>-->
    </div>
</template>

<script>
    import Volunteers from "../Volunteers";
    import {pathOr} from "ramda";

    export default {
        props:{
            detail:{
                type:Object,
                required:true
            }
        },
        name: "MyRequests",
        components:{
            Volunteers
        },
        computed:{
            acceptedByVolunteer(){
                return pathOr([],['volunteers','acceptedByVolunteer'],this.detail)
            }
        }
    }
</script>

<style scoped >

</style>