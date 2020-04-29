<template>
    <div class="volunteers-list my-5">
        <h1 class="m-0">volunteers</h1>
        <p class="text-muted">You can only accept help from one person at once.</p>
        <Volunteers></Volunteers>
        <Volunteers></Volunteers>
        <Volunteers></Volunteers>
    </div>
</template>

<script>
    import Volunteers from "../Volunteers";

    export default {
        name: "MyRequests",
        components:{
            Volunteers
        }
    }
</script>

<style scoped >

</style>