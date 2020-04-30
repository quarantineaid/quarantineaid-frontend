import format from "date-fns/format";
<template>
    <div class="card-detail-wrap d-flex flex-column flex-lg-row">
        <div class="map-screen flex-grow-1 d-xl-flex map-wrap flex-shrink-0 col p-0"
             v-if="currentLayout==='helping'&&currentTabIndex===0&&this.showMap">
            <div class="map-action-bar d-flex justify-content-between">
                <div class="zip-bar d-flex align-items-center flex-grow-1 mr-3">
                    <multiselect v-model="searchTerm" :show-labels="false" label="name" track-by="name"
                                 placeholder="Type to search" :options="cities" :searchable="true"
                                 @search-change="debounceSearch" @select="onCitySelect" @remove="onRemove">
                    </multiselect>
                    <!--                            <input v-model="searchTerm" type="search" @keydown.enter="searchByPin" placeholder="Search by pincode">-->
                </div>
                <button class="btn-current flex-shrink-0 ml-auto"><img src="@/assets/leaflet/current-loc.png" alt=""
                                                                       @click="getCurrentLocation"></button>
            </div>
            <l-map scrollWheelZoom="false" :zoom="zoom" :center="center"
                   :options="{zoomControl: false,scrollWheelZoom:false}">
                <l-control-zoom position="bottomright"></l-control-zoom>
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <template v-if="searchTerm">
                    <l-marker @click="onMarkerClick(index)" :icon="icon" v-for="(obj,index) in listOfCards" :lat-lng="getLatLng(obj)" :key="index">

                    </l-marker>
                </template>

                <l-marker v-else :lat-lng="marker" :icon="icon" >
                   <!-- <l-popup>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet autem beatae
                            debitis dolorum eum exercitationem fugiat harum numquam obcaecati officiis perferendis, qui
                            quia rem sed tenetur velit vero?
                        </div>
                    </l-popup>-->
                </l-marker>
            </l-map>
        </div>
        <!--        'col d-flex flex-column flex-grow-1 flex-shrink-0'-->
        <!--        <div :class="!isHelping?'':'col d-flex flex-column flex-grow-1 flex-shrink-0'" class=" px-0 cases ">-->
        <div class=" px-0 cases col-lg d-lg-flex flex-lg-column flex-lg-grow-1 flex-md-shrink-0">
            <div class="d-none d-lg-flex cases-wrap flex-shrink-0 justify-content-between align-self-center">
                <h1 class="heading">{{$route.name==='Home'?'occurrences':'Situations'}} {{listOfCards.length}}</h1>
                <div>
                    <button class="btn-current" @click="onFilterClick"><img src="@/assets/control.png" alt="">
                    </button>
                </div>
            </div>
            <button v-if="this.showMap" :class="{'d-block':isHelping,'d-none':!isHelping}" class="tab-switch d-lg-none"
                    @click="onShowListView"><span></span></button>
            <div :class="{'flex-row':isHelping,'d-none':(isHelping?showMap&&!showListBlock:false),'d-flex':(isHelping?showListBlock:true),'flex-column':(isHelping?!showMap:true)}"
                 class="cases-list-wrap flex-lg-column d-lg-flex  flex-fill pt-4 pt-lg-0" v-if="listOfCards.length">

                    <case-card :id="`card-${index}`" v-for="(eachCard,index) in listOfCards" @cardClick="showDetailsView(index)"
                               :index="index" :data-obj="eachCard" :key="index"></case-card>
                    <!--                    <case-card @cardClick="showDetailsView"></case-card>-->
                    <!--                    <case-card @cardClick="showDetailsView"></case-card>-->
                    <!--                    <case-card @cardClick="showDetailsView"></case-card>-->
                    <!--                    <case-card @cardClick="showDetailsView"></case-card>-->

                <mugen-scroll :handler="infiniteHandler" :should-handle="!loading">
                    {{loadingText}}
                </mugen-scroll>
            </div>
        </div>
        <div class="flex-grow-1 d-none d-lg-flex flex-shrink-0 details col p-0">
            <div class="details-desc d-flex flex-column flex-fill" v-if="listOfCards.length">
                <vue-scroll  class="col p-0 flex-shrink-1 position-relative">
                    <div class="mr-4">
                        <h1 class="heading">details</h1>
                        <button class="btn-current d-block d-md-none" @click="showListView"><img
                                src="@/assets/control.png"
                                alt=""></button>

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
                            ...
                        </carousel>
                        <h2 class="title my-4">{{listOfCards[getCurrentCardIndex].title}}</h2>
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
                                    <span class="category">{{listOfCards[getCurrentCardIndex].type}}</span>
                                    <span class="sep">|</span>
                                    <span>category</span>
                                </div>
                            </div>
                            <div class="date d-flex flex-shrink-0">{{getFormatedData}}</div>
                        </div>
                        <component :is="currentDetailComponent" :detail="listOfCards[getCurrentCardIndex]"></component>
                    </div>
                </vue-scroll>

            </div>
        </div>
    </div>
    <!--        <div class="d-none d-lg-flex map-wrap p-0 flex-row">-->
    <!--            <h1>Map</h1>-->
    <!-- <div class="map-action-bar d-flex justify-content-between">
         <div class="zip-bar d-flex align-items-center">
             <input v-model="searchTerm" type="search" @keydown.enter="searchByPin" placeholder="Search by pincode">
         </div>
         <button class="btn-current flex-shrink-0 ml-auto"><img src="@/assets/leaflet/current-loc.png" alt="" @click="getCurrentLocation"></button>
     </div>-->
    <!--<l-map scrollWheelZoom="false" :zoom="zoom" :center="center" :options="{zoomControl: false,scrollWheelZoom:false}">
        <l-control-zoom position="bottomright"  ></l-control-zoom>
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="marker"  :icon="icon">
            <l-popup>
                <div >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet autem beatae debitis dolorum eum exercitationem fugiat harum numquam obcaecati officiis perferendis, qui quia rem sed tenetur velit vero?
                </div>
            </l-popup>
        </l-marker>
    </l-map>-->
    <!--        </div>-->
    </div>
</template>

<script>
    import CaseCard from "./CaseCard";
    import {LControlZoom, LMap, LMarker, LPopup, LTileLayer} from "vue2-leaflet";
    import axios from "axios";
    import {icon, latLng} from "leaflet";
    import {getCurrentPosition} from "../utils";
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
    import {tabConfig} from '../utils/static';
    import DetailsCompo from "./details";
    import Multiselect from 'vue-multiselect';
    import {debounce} from "lodash";
    import {ajaxFindArea} from "../servies/form";
    import {isAndroid, isIOS} from 'mobile-device-detect';
    import {pathOr} from "ramda";
    import format from 'date-fns/format';
    import InfiniteLoading from 'vue-infinite-loading';
    import MugenScroll from 'vue-mugen-scroll'
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: "MapCardDetail",
        components: {
            LMap, LTileLayer, LMarker, LPopup, LControlZoom, CaseCard, ...DetailsCompo, Multiselect,MugenScroll, Carousel, Slide
        },
        methods: {
            ...mapMutations('global', ['setCurrentTabIndex', 'setCurrentDetailComponent', 'setCurrentBottomSheet', 'setShowModal','setCurrentUrl','setCurrentLayout','reset']),
            ...mapActions('cards', ['getCards']),
            ...mapMutations('cards', ['updateCurrentCardIndex','updateLoaded','updateCards']),
            onMarkerClick(index){
                document.querySelector(`.cases-list-wrap #card-${index}`).scrollIntoView();
            },
            getLatLng(Obj){
                const [lng, lat]  = Obj.geojson.geometry.coordinates;
                return latLng(lat, lng)
            },
            onShowListView() {
                this.showListBlock = !this.showListBlock;
            },
            onFilterClick() {
                this.setCurrentBottomSheet('FilterComp');
                this.setShowModal(true)
            },
            showListView() {
                if (screen.width < 768) {
                    this.showList = true;
                    this.showDetails = false;
                }
            },
            onRemove(){
                this.getCards({clearCards:true});
            },
            onCitySelect(selected) {
                debugger;
                const [lng, lat] = selected.data.geometry.coordinates;
                this.center = latLng(lat, lng);
                this.marker = latLng(lat, lng);
                this.zoom = 12;
                this.getCards({
                    location:{
                        longitude:lng,
                        latitude:lat,
                        maxKmDistance:10
                    },
                    clearCards:true
                })
            },
            showDetailsView(index) {
                if (isAndroid || isIOS) {
                    this.$router.push({name: "MobCardDetail"});
                    return;
                    /*this.showList = false;
                    this.showDetails = true;*/
                }

                const [lng, lat] = this.listOfCards[this.getCurrentCardIndex].geojson.geometry.coordinates;
                this.center = latLng(lat, lng);
                this.marker = latLng(lat, lng);
                this.zoom = 14;

                this.updateCurrentCardIndex(index)

            },
            debounceSearch: debounce(async function (query) {
                const response = await ajaxFindArea(query);
                if (response) {
                    //console.log(response)
                    this.cities = response;

                }
            }, 500),
            setDetailComp() {
                this.setCurrentDetailComponent(this.tabId)
            },
            async searchByPin() {
                if (this.searchTerm.length === 6) {
                    const res = await axios.get(`https://nominatim.openstreetmap.org/search/${this.searchTerm}?format=json&polygon=1&addressdetails=1&polygon_geojson=1`)
                    if (res.status === 200 && res.data.length) {
                        const latlons = res.data.map(address => `${address.lat}${address.lon}`.length);
                        const index = latlons.indexOf(Math.max(...latlons));
                        const {lat, lon} = res.data[index];
                        this.marker = latLng(lat, lon);
                        this.center = latLng(lat, lon);
                    }
                }
            },
            async getCurrentLocation() {
                let position;
                try {
                    position = await getCurrentPosition();
                } catch (err) {
                    throw new Error(err)
                    // console.log(error);
                }
                const {latitude, longitude} = position.coords;
                this.marker = latLng(latitude, longitude);
                this.center = latLng(latitude, longitude);

                /*if(navigator.geolocation){
                    await navigator.geolocation.getCurrentPosition((data)=>{
                        const {latitude,longitude} = data.coords
                        this.marker = latLng(latitude,longitude);
                        this.center = latLng(latitude,longitude);
                    })
                }*/
            },
            getImagePath(path){
                return path || require("@/assets/dummy/med.jpg")
            },
            infiniteHandler(){
                debugger;
                this.loading = true;
                // console.log(this.getPageData,this.hasPageLoaded)
                if(this.getPageData.hasNextPage){
                    this.loadingText = "Loading....";
                    this.getCards();
                }else{
                    this.loadingText = "";
                }
                // console.log(this.getPageData,this.getPageData.hasNextPage)
                /*if(this.this.getPageData&&this.getPageData.hasNextPage){
                    this.getCards();
                }*/
                /*if(this.hasPageLoaded){
                    this.updateLoaded(false);
                    if(this.getPageData&&this.getPageData.hasNextPage){
                        this.getCards();
                    }
                    setTimeout(()=>{
                        // debugger
                        $state.complete();
                    },2000)
                }else{
                    debugger;
                }*/
               /* this.getPageData;
                debugger;*/
                /*if(this.getPageData&&this.getPageData.hasNextPage&&!this.hasPageLoaded){
                    debugger;
                    this.getCards();
                }else if(this.hasPageLoaded){
                    debugger;
                    console.log($state)
                    this.updateLoaded(true);
                    $state.complete();
                }*/

            }
        },
        data() {
            return {
                loading:false,
                loadingText:'',
                showListBlock: true,
                showDetails: true,
                showList: true,
                searchTerm: '',
                cities: [],
                markerDraggable: true,
                zoom: 14,
                center: latLng(12.9716, 77.5946),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: latLng(12.9716, 77.5946),
                // marker2:latLng(47.443220, -1.219482),
                currentCenter: latLng(47.41322, -1.219482),
            }
        },
        created() {
            this.unsubscribe = this.$store.subscribe((mutation, state) => {
                if (mutation.type === 'cards/updateCards') {
                    if (mutation.payload&&state.cards.cardData&&state.cards.cardData.hasNextPage) {
                        this.loading = false;
                    }

                    if(!state.cards.cardData&&this.$route.name ==='Home'){
                        this.reset()
                       /* this.setCurrentLayout('helping');
                        this.setCurrentLayout('helping');
                        this.setCurrentUrl('')*/
                    }
                }

                if(mutation.type==="global/setCurrentDetailComponent"){
                    this.searchTerm = null;
                    this.updateCards(null);
                    this.getCards();
                }
            });
        },
        destroyed() {
            this.unsubscribe();
        },
        mounted() {
            this.showListView();
            this.setCurrentTabIndex(0);
            this.setDetailComp();
            /*this.updateCards(null);
            this.getCards();*/
        },
        watch: {
            currentTab() {
                this.setDetailComp();
                this.showListView();
            },
        },
        computed: {
            ...mapState('global', ['currentTabIndex', 'currentDetailComponent', 'currentLayout', 'showMap']),
            ...mapState('cards', ['pageLoaded']),
            ...mapGetters('cards', ['listOfCards', 'getCurrentCardIndex','getPageData']),
            getDetailImage: {
                get() {
                    return  require("@/assets/dummy/med.jpg")
                }
            },
            hasImages:{
                get(){
                    return this.listOfCards.length&&this.listOfCards[this.getCurrentCardIndex].images.length
                }
            },
            icon() {
                return icon({
                    iconUrl: require('@/assets/leaflet/marker-icon.png'),
                    shadowUrl: require('@/assets/leaflet/marker-shadow.png'),
                })
            },
            tabId: {
                get() {
                    return tabConfig[this.currentLayout].tabs[this.currentTabIndex].id
                }
            },
            isHelping() {
                if (!this.currentLayout === 'helping' && this.currentTabIndex === 0) {
                    this.showListBlock = true;
                }
                return (this.currentLayout === 'helping' && this.currentTabIndex === 0)
            },
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
            isMobile() {
                return (isAndroid || isIOS)
            },
        },
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .card-detail {
        /*min-height: calc(100vh);*/
        /*border-radius: 50px;*/
        margin-bottom: 30px;
        overflow: hidden;

        /*.tab-group {

            .btn-tab {
                font-family: Inter;
                font-size: 20px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.4;
                letter-spacing: -0.02px;
                color: #ffffff;
                padding: 0;
                @include media-breakpoint-down(md) {
                    font-size: 18px;
                }

                &.active {
                    padding: 0 25px;
                    border-radius: 20px;
                    height: 58px;
                    border: solid 2px rgba(255, 255, 255, 0.5);
                    background-color: rgba(255, 255, 255, 0.2);
                    @include media-breakpoint-down(sm) {
                        border-radius: 13.3px;
                        height: 40px;
                    }

                }
            }
        }*/

        &-wrap {
            height: 100%;
            width: 100%;
            flex: 1;
            /*margin-top: 2rem;*/
            border-radius: 50px;
            overflow: hidden;
            background: #ffffff;
            @include media-breakpoint-down(md) {
                border-radius: 20px;
            }
            @include media-breakpoint-down(md) {
                .map-screen {
                    height: calc(100vh - 70vh);
                    /*&+div{
                        height: 280px;
                    }*/
                }
            }

        }

        .tab-switch {
            width: 100%;
            padding: 8px 0px;
            border: none;
            background: none;

            span {
                display: inline-block;
                margin: 0 auto;
                padding: 3px 0px;
                width: 50px;
                border-radius: 3px;
                background: rgba(0, 0, 0, 0.2);
            }
        }

        /*&-wrap {
            height: 100%;
            width: 100%;
            flex: 1;
            !*margin-top: 2rem;*!
            border-radius: 50px;
            overflow: hidden;
            background: #ffffff;
            @include media-breakpoint-down(sm) {
                border-radius: 20px;
                !*.map-screen{
                    height: 50%;
                    .map{
                        height: 100%;
                    }
                }*!
            }
        }*/
    }
</style>