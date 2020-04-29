<template>
    <section class="map" id="map">
        <div class="container d-flex flex-column  flex-fill min-vh-100 ">
            <h1 class="map-heading flex-shrink-0">People who need help</h1>
            <div class="row d-flex flex-fill flex-grow-1">
                <MapCardDetail></MapCardDetail>
            </div>
            <!--<h1 class="map-heading">People who need help</h1>
            <div class="map-search row p-0 m-0">

                <MapCardDetail></MapCardDetail>
            </div>-->

            <!--<div class="map-search row p-0 m-0">

                <div class="col-lg-6 px-0 map-wrap d-none d-xl-block">
                    <div class="map-action-bar d-flex justify-content-around">
                        <div class="zip-bar d-flex align-items-center">
                            <input v-model="searchTerm" type="search" @keydown.enter="searchByPin" placeholder="Search by pincode">
                        </div>
                        <button class="btn-current"><img src="@/assets/leaflet/current-loc.png" alt="" @click="getCurrentLocation"></button>
                    </div>
                    <l-map scrollWheelZoom="false" :zoom="zoom" :center="center" :options="{zoomControl: false,scrollWheelZoom:false}">
                        <l-control-zoom position="bottomright"  ></l-control-zoom>
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="marker"  :icon="icon">
                            <l-popup>
                                <div >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet autem beatae debitis dolorum eum exercitationem fugiat harum numquam obcaecati officiis perferendis, qui quia rem sed tenetur velit vero?
                                </div>
                            </l-popup>
                        </l-marker>
                    </l-map>
                </div>
                <div class="d-none d-lg-flex col-lg-6 px-0 cases d-flex flex-column flex-grow-1">
                    <div class="d-flex cases-wrap flex-shrink-0 justify-content-between align-self-center">
                        <h1>cases</h1>
                        <button class="btn-current"><img src="@/assets/control.png" alt=""></button>
                    </div>
                    <div class="cases-list-wrap d-flex flex-column flex-fill">
                        <perfect-scrollbar class="col p-0 flex-shrink-1 position-relative">
                            <case-card></case-card>
                            <case-card></case-card>
                            <case-card></case-card>
                            <case-card></case-card>
                            <case-card></case-card>
                        </perfect-scrollbar>

                    </div>
                </div>
                <div class="px-0 d-none">
                    <h1>details</h1>
                </div>
            </div>-->
        </div>
    </section>
</template>

<script>

    // import { LMap, LTileLayer, LMarker,LPopup,LControlZoom } from 'vue2-leaflet';
    import {latLng,icon} from 'leaflet';
    import {getCurrentPosition} from '../../utils'
    import axios from 'axios';
    // import CaseCard from "../CaseCard";
    import MapCardDetail from '../MapCardDetail';
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "Map",
        components:{
           /* LMap, LTileLayer, LMarker,LPopup,LControlZoom,*/MapCardDetail
        },
        computed:{
            icon(){
                return icon({
                    iconUrl: require('@/assets/leaflet/marker-icon.png'),
                    shadowUrl: require('@/assets/leaflet/marker-shadow.png'),
                })
            }
        },
        methods:{
            ...mapMutations('global',['setCurrentUrl']),
            ...mapMutations('cards',['updateCards']),
            ...mapActions('cards',['getCards']),
            async searchByPin(){
                if(this.searchTerm.length === 6){
                  const res = await axios.get(`https://nominatim.openstreetmap.org/search/${this.searchTerm}?format=json&polygon=1&addressdetails=1&polygon_geojson=1`)
                    if(res.status ===200&&res.data.length){
                        const latlons = res.data.map(address=>`${address.lat}${address.lon}`.length);
                        const index = latlons.indexOf(Math.max(...latlons));
                        const {lat,lon} = res.data[index];
                        this.marker = latLng(lat,lon);
                        this.center = latLng(lat,lon);
                    }
                }
            },
            async getCurrentLocation(){
                let position;
                try {
                    position = await getCurrentPosition();
                } catch (err) {
                    throw new Error(err)
                    // console.log(error);
                }
                const {latitude,longitude} = position.coords;
                this.marker = latLng(latitude,longitude);
                this.center = latLng(latitude,longitude);

                /*if(navigator.geolocation){
                    await navigator.geolocation.getCurrentPosition((data)=>{
                        const {latitude,longitude} = data.coords
                        this.marker = latLng(latitude,longitude);
                        this.center = latLng(latitude,longitude);
                    })
                }*/
            }
        },
        data() {
            return {
                searchTerm:'',
                markerDraggable:true,
                zoom:14,
                center: latLng(12.9716, 77.5946),
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: latLng(12.9716, 77.5946),
                // marker2:latLng(47.443220, -1.219482),
                currentCenter: latLng(47.41322, -1.219482),
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .map {
        width: 100%;
        min-height: 100vh;
        background: #685bb6;
        padding-bottom: 50px;
        & /deep/ .card-detail-wrap{
            height: 90vh;
        }
        &-heading {
            font-family: Inter;
            font-size: 40px;
            font-weight: 800;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: -0.02px;
            color: #ffffff;
            text-align: center;
            margin-top: 30px;
            margin-bottom: 30px;
            /* @include media-breakpoint-down(lg){
                 transform: translateY(50px);
             }*/
            @include media-breakpoint-down(sm){
                font-size: 22px;
            }
        }

        .map-search {
            overflow: hidden;
            width: 100%;
            height: 100vh;
            background: #ffffff;
            border-radius: 50px;
            .card-detail-wrap{
                height: inherit;
            }
        }
        .map-wrap{
            position: relative;
            .map-action-bar{
                position: absolute;
                z-index: 999;
                width: 100%;
                top: 50px;
            }
            .zip-bar{
                width: 70%;
                position: relative;
                input{
                    width: 100%;
                    text-align: center;
                    padding: 18px 38px;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px -10px rgba(139, 142, 149, 0.1);
                    border: solid 1px #f2f4f8;
                    font-size: 18px;
                }
            }
        }

    }
</style>