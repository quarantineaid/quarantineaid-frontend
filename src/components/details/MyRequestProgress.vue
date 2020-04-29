<template>
    <fragment>
        <div class="volunteers-list my-5">
            <h1 class="m-0">assisting person</h1>
            <p class="text-muted">You can only accept help from one person at once.</p>
            <div class="d-flex flex-row my-3">
                <div class="image-wrap flex-shrink-0">
                    <img src="@/assets/dummy/person.png" alt="">
                </div>
                <div class="bio-text d-flex flex-grow-1 flex-column">
                    <h4 class="name">Malvika Singh</h4>
                    <div class="d-flex flex-row">
                        <span>food</span>
                        <span class="sep">|</span>
                        <span>category</span>
                    </div>
                </div>
                <div class="date d-flex flex-shrink-0 btn-grp justify-content-between">
                    <button  class="btn btn-small white-filled"><img src="@/assets/danger.png"></button>
                </div>
            </div>
        </div>
        <div class="row d-flex my-5 m-0">
            <div class="col-12 col-md-6">
                <button class="btn btn-outline-yellow btn-block mb-4">couldn’t help</button>
            </div>
            <div class="col-12  col-md-6">
                <button class="btn btn-yellow btn-block">resolved</button>
            </div>
        </div>
    </fragment>
</template>

<script>
    export default {
        name: "MyRequestProgress"
    }
</script>

<style scoped>

</style>