<template>
    <DashboardLayout>
            <div class="search d-flex"  slot="content">
                <div class="search-wrap">
                    <div class="input-group px-3 search-input">
                        <vue-google-autocomplete
                                id="map"
                                classname="form-control"
                                placeholder="Start typing"
                                v-on:placechanged="getAddressData"
                        >
                        </vue-google-autocomplete>
<!--                        <input ref="autocomplete" type="text" class="form-control" placeholder="zipcode" aria-label="Recipient's username" aria-describedby="button-addon2">-->
                        <!--<div class="input-group-append">
                            <button class="btn btn-primary" type="button" id="button-addon2">Search by zip</button>
                        </div>-->
                    </div>
                    <l-map :zoom="zoom" :center="center" :options="{zoomControl: false}">
                        <l-control-zoom position="bottomright"  ></l-control-zoom>
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="marker"  :icon="icon">
                            <l-popup>
                                <div >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet autem beatae debitis dolorum eum exercitationem fugiat harum numquam obcaecati officiis perferendis, qui quia rem sed tenetur velit vero?
                                </div>
                            </l-popup>
                        </l-marker>
                        <l-marker :lat-lng="marker2"  :icon="icon">
                            <l-popup>
                                <div >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet autem beatae debitis dolorum eum exercitationem fugiat harum numquam obcaecati officiis perferendis, qui quia rem sed tenetur velit vero?
                                </div>
                            </l-popup>
                        </l-marker>
                    </l-map>
                </div>
            </div>

    </DashboardLayout>
</template>

<script>
    import DashboardLayout from "../layout/Dashboard";
    import { LMap, LTileLayer, LMarker,LPopup,LControlZoom } from 'vue2-leaflet';
    import {latLng,icon} from 'leaflet';
    import VueGoogleAutocomplete from 'vue-google-autocomplete'

    export default {
        name: "Search",
        components:{
            DashboardLayout,
            LMap, LTileLayer, LMarker,LPopup,LControlZoom,VueGoogleAutocomplete
        },
        mounted() {

        },
        data() {
            return {
                markerDraggable:true,
                zoom:13,
                center: latLng(47.41322, -1.219482),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: latLng(47.41322, -1.219482),
                marker2:latLng(47.443220, -1.219482),
                currentCenter: latLng(47.41322, -1.219482),
            }
        },
        methods:{
            getAddressData(){

            }
        },
        computed:{
            icon(){
                return icon({
                    iconUrl: require('../assets/leaflet/marker-icon.png'),
                    shadowUrl: require('../assets/leaflet/marker-shadow.png'),
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.search{
    width: 100%;
    height: calc(100vh - 58px);
    overflow: hidden;
    &-wrap{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .search-input{
        top: 25px;
        position: absolute;
        z-index: 999;
    }
}
</style>