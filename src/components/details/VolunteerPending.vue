<template>
    <div class="my-5">
        <b-alert show variant="success" >
            <h4 class="m-2 text-center">request sent</h4>
        </b-alert>
    </div>
</template>

<script>
    import {BAlert} from 'bootstrap-vue';
    export default {
        name: "VolunteerPending",
        components:{
            BAlert
        }
    }
</script>

<style scoped>

</style>