<template>
    <div class="d-flex flex-column h-100 req-body">
        <TopNav @showBottomSheet="showBottomSheet">
            <button slot="back" class="btn d-inline-flex d-md-none btn-back" @click="$router.go(-1)"><img
                    src="@/assets/back.svg" alt=""></button>

        </TopNav>
        <div class="details-desc d-flex flex-column flex-fill">
            <vue-scroll class="col p-0 flex-shrink-1 position-relative">
                <div class="p-3">
                    <h1 class="heading my-4">details</h1>
                    <div class="img-cover">
                        <img src="@/assets/dummy/med.jpg" alt="">
                    </div>
                    <h2 class="heading my-4">Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div class="d-flex flex-row">
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
                        <div class="date d-flex flex-shrink-0">19 oct</div>
                    </div>
                    <component :is="currentDetailComponent"></component>
                </div>
            </vue-scroll>
        </div>
    </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import {mapState} from 'vuex';
    import DetailsCompo from "../components/details";

    export default {
        name: "MobCardDetail",
        components: {
            TopNav,...DetailsCompo
        },
        methods: {
            showBottomSheet() {
                debugger;
            }
        },
        computed:{
            ...mapState('global', ['currentDetailComponent']),
        }
    }
</script>

<style scoped lang="scss">
    .btn.btn-back {
        width: 40px;
        height: 40px;
        border-radius: 12px !important;
        background-color: #f2f4f8 !important;

        img {
            width: 7px;
            height: 14px;
        }
    }
</style>