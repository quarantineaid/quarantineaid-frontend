<template>
    <fragment>
        <!--<div class="volunteers-list my-5">
            <p class="text-muted m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
        </div>-->
        <div class="my-5">
            <b-alert show variant="success">
                <h4 class="m-2">helped by {{volunteerList[0].name}}.</h4>
            </b-alert>
        </div>
    </fragment>

</template>

<script>
    import {BAlert} from 'bootstrap-vue';
    import {pathOr} from "ramda";

    export default {
        props:{
            detail:{
                type:Object,
                required:true
            }
        },
        name: "MyRequestResolved",
        components: {
            BAlert
        },
        computed:{
            volunteerList:{
                get(){
                    return pathOr([],['volunteers','acceptedByVolunteer'],this.detail)
                }
            }
        }
    }
</script>

<style scoped>

</style>