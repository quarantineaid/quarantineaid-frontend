<template>
    <fragment>
        <div class="volunteers-list my-5">
            <p class="text-muted m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
        </div>
        <div class="my-5">
            <b-alert show variant="success">
                <h4 class="m-2">helped by John on Dec 12th, 2020</h4>
            </b-alert>
        </div>
    </fragment>

</template>

<script>
    import {BAlert} from 'bootstrap-vue';

    export default {
        name: "MyRequestResolved",
        components: {
            BAlert
        }
    }
</script>

<style scoped>

</style>