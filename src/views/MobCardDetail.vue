import format from "date-fns/format";
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
                    <div class="img-cover" v-if="!hasImages">
                        <img :src="getDetailImage" alt="">
                    </div>
                    <carousel v-if="hasImages" :perPage="1"  paginationPosition="bottom-overlay">
                        <slide v-for="(imagePath,index) in listOfCards[getCurrentCardIndex].images"
                               :data-index="index"
                               :key="index">
                            <div class="img-cover">
                                <img :src="getImagePath(imagePath)" alt="">
                            </div>
                        </slide>
                    </carousel>
                    <h2 class="heading my-4">{{listOfCards[getCurrentCardIndex].title}}</h2>
                    <p>
                        {{listOfCards[getCurrentCardIndex].description}}
                    </p>
                    <div class="d-flex flex-row">
                        <div class="image-wrap flex-shrink-0">
                            <img :src="getCurrUserProfile" alt="">
                        </div>
                        <div class="bio-text d-flex flex-grow-1 flex-column">
                            <h4 class="name">{{listOfCards[getCurrentCardIndex].requester.name}}</h4>
                            <div class="d-flex flex-row">
                                <span>{{listOfCards[getCurrentCardIndex].type}}</span>
                                <span class="sep">|</span>
                                <span>category</span>
                            </div>
                        </div>
                        <div class="date d-flex flex-shrink-0">{{getFormatedData}}</div>
                    </div>
                    <component :is="currentDetailComponent"></component>
                </div>
            </vue-scroll>
        </div>
    </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import {mapGetters, mapState} from 'vuex';
    import DetailsCompo from "../components/details";
    import {pathOr} from "ramda";
    import format from 'date-fns/format';
    import {Carousel, Slide} from "vue-carousel";

    export default {
        name: "MobCardDetail",
        components: {
            TopNav,...DetailsCompo, Carousel, Slide
        },
        methods: {
            showBottomSheet() {
                debugger;
            },
            getImagePath(path){
                return path || require("@/assets/dummy/med.jpg")
            },
        },
        computed:{
            ...mapState('global', ['currentDetailComponent']),
            ...mapGetters('cards',['listOfCards','getCurrentCardIndex']),
            getCurrUserProfile:{
                get(){
                    return pathOr(null,['requester','picture'],this.listOfCards[this.getCurrentCardIndex]) || require("@/assets/default-user.png")
                }
            },
            getFormatedData:{
                get(){
                    return format(
                        new Date(pathOr(new Date(),['_created_at'],this.listOfCards[this.getCurrentCardIndex])),
                        'dd MMM'
                    )
                }
            },
            hasImages:{
                get(){
                    return this.listOfCards.length&&this.listOfCards[this.getCurrentCardIndex].images.length
                }
            },
            getDetailImage: {
                get() {
                    return  require("@/assets/dummy/med.jpg")
                }
            },

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