<template>
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
            <button class="btn btn-small yellow-border"><img src="@/assets/close.png"></button>
            <button  class="btn btn-small yellow-filled"><img src="@/assets/check.png"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Volunteers"
    }
</script>

<style scoped lang="scss">
    .btn-grp{
        width: 110px;

    }

</style>