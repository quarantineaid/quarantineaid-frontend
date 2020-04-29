<template>
    <div class="req-form">
        <div class="row m-0">
            <div v-if="(isMobile)" class="row d-block d-md-none heading m-0">
                <div class="col-12">
                    <h1>Need help</h1>
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">

                <!--                <div class="row d-flex justify-content-center align-items-center align-self-center">-->
                <div class="row d-flex flex-fill h-100 map-wrap">
                    <div class="map-action-bar d-flex justify-content-between">
                        <div class="zip-bar d-flex align-items-center flex-grow-1 mr-3">
                            <multiselect v-model="formBody.city" :show-labels="false" label="name" track-by="name"
                                         placeholder="Type to search" :options="cities" :searchable="true"
                                         @search-change="debounceSearch" @select="onCitySelect">
                            </multiselect>
                            <!--                            <input v-model="searchTerm" type="search" @keydown.enter="searchByPin" placeholder="Search by pincode">-->
                        </div>
                        <button class="btn-current flex-shrink-0 ml-auto"><img src="@/assets/leaflet/current-loc.png"
                                                                               alt="" @click="getCurrentLocation">
                        </button>
                    </div>
                    <l-map scrollWheelZoom="false" :zoom="zoom" :center="center" :options="{zoomControl: false}">
                        <l-control-zoom position="bottomright"></l-control-zoom>
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="marker" :icon="icon" :draggable="markerDraggable" @dragend="onMarkerDrop">
                            <l-popup>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet
                                    autem beatae debitis dolorum eum exercitationem fugiat harum numquam obcaecati
                                    officiis perferendis, qui quia rem sed tenetur velit vero?
                                </div>
                            </l-popup>
                        </l-marker>
                    </l-map>
                    <!--<div class="col-12 col-lg-8">
                        <div class="text-center">
                            <div class="oval"></div>
                            <h4>What is QuarantAid?</h4>
                            <p>Quarantaid.me connects those in need with volunteers who are able to help them. This
                                is particularly
                                important during this period of quarantine and self-isolation due to COVID-19.</p>
                        </div>

                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="text-center">
                            <div class="oval"></div>
                            <h4>What is QuarantAid?</h4>
                            <p>Quarantaid.me connects those in need with volunteers who are able to help them. This
                                is particularly
                                important during this period of quarantine and self-isolation due to COVID-19.</p>
                        </div>

                    </div>-->
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex p-0">
                <div class="flex-fill curved-bd p-0">
                    <vue-scroll>
                    <form class="form-signup d-flex flex-column justify-content-center my-5 p-4 p-md-5 m-0" autocomplete="off"
                          @submit="onFormSubmit">
                        <h1 class=" d-none d-md-block h3 font-weight-normal mb-3">I need help</h1>
                        <div class="row m-0">
                            <div class="col-xs-12 col-lg-6 ">
                                <div class="form-group">
                                    <label for="inputType">Select type</label>
                                    <select v-model="formBody.type" name="type" id="inputType" class="form-control">
                                        <option value="food">Food</option>
                                        <option value="medicines">Medicines</option>
                                        <option value="masks">Masks</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-xs-12 col-lg-6">
                                <div class="form-group">
                                    <label for="customFile">Select File (Optional)</label>
                                    <b-form-file multiple v-model="upload" accept=".jpg, .png," ref="file-input"
                                                 class="mb-2"></b-form-file>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="inputSubject">Subject</label>
                                    <input v-model="formBody.title" type="text" id="inputSubject" class="form-control"
                                           required/>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="inputDesc">Description</label>
                                    <textarea v-model="formBody.description" id="inputDesc"
                                              class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="inputTel">Phone</label>
                                    <input v-model="formBody.phone" type="text" id="inputTel" class="form-control"
                                           required/>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="inputCity">City</label>
                                    <input :disabled="true" :value="cityName" type="text" id="inputCity"
                                           class="form-control" required/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="inputZipcode">Zip Code</label>
                                    <input :disabled="true" v-model="formBody.zip" type="text" id="inputZipcode"
                                           class="form-control" required/>
                                </div>

                            </div>
                        </div>
                        <button class="btn btn-block mt-4 btn-yellow" type="submit">Create Request</button>
                    </form>
                    </vue-scroll>
                </div>

            </div>
        </div>

        <!--<div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="row d-flex justify-content-center align-items-center align-self-center">
                        <div class="col-12 col-lg-8">
                            <div class="text-center">
                                <div class="oval"></div>
                                <h4>What is QuarantAid?</h4>
                                <p>Quarantaid.me connects those in need with volunteers who are able to help them. This
                                    is particularly
                                    important during this period of quarantine and self-isolation due to COVID-19.</p>
                            </div>

                        </div>
                        <div class="col-12 col-lg-8">
                            <div class="text-center">
                                <div class="oval"></div>
                                <h4>What is QuarantAid?</h4>
                                <p>Quarantaid.me connects those in need with volunteers who are able to help them. This
                                    is particularly
                                    important during this period of quarantine and self-isolation due to COVID-19.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <form class="form-signup d-flex flex-column justify-content-center my-5" autocomplete="off">
                        &lt;!&ndash;                    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">&ndash;&gt;
                        <h1 class="h3 font-weight-normal mb-3">I need help</h1>
                        <div class="row">
                            <div class="col-xs-12 col-lg-6">
                                <div class="form-group">
                                    <label for="inputType">Select type</label>
                                    <select name="type" id="inputType" class="form-control">
                                        <option>Food</option>
                                        <option>Groceries</option>
                                        <option>Medicine</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-xs-12 col-lg-6">
                                <div class="form-group">
                                    <label for="customFile">Select File (Optional)</label>
                                    <b-form-file accept=".jpg, .png," ref="file-input" class="mb-2"></b-form-file>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="inputSubject">Subject</label>
                                    <input type="text" id="inputSubject" class="form-control" required/>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="inputDesc">Description</label>
                                    <textarea id="inputDesc" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="inputTel">Phone</label>
                                    <input type="text" id="inputTel" class="form-control" required/>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="inputTel">City</label>
                                    <div>
                                        <multiselect v-model="selectedCities" :options="cities" :show-labels="false"></multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="inputZipcode">Zip Code</label>
                                    <input type="text" id="inputZipcode" class="form-control" required/>
                                </div>

                            </div>
                        </div>
                        <button class="btn btn-primary btn-block mt-4" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>-->
    </div>

</template>

<script>
    import {BFormFile} from 'bootstrap-vue'
    import Multiselect from 'vue-multiselect'
    import {icon, latLng} from "leaflet";
    import {LControlZoom, LMap, LMarker, LPopup, LTileLayer} from "vue2-leaflet";
    import axios from "axios";
    import {getCurrentPosition} from "../../utils";
    import {ajaxFindArea, latLngReverse, makeNewFormRequest} from "../../servies/form";
    import {debounce} from 'lodash';
    import {isAndroid, isIOS} from 'mobile-device-detect'
    import {pathOr} from "ramda";
    import {mapMutations} from "vuex";

    export default {
        name: "Form",
        components: {
            BFormFile, Multiselect, LMap, LTileLayer, LMarker, LPopup, LControlZoom
        },
        data() {
            return {
                upload: null,
                cities: [],
                formBody: {
                    city: null,
                    zip: null
                },
                selectedCities: [],
                showListBlock: true,
                showDetails: true,
                showList: true,
                searchTerm: '',
                markerDraggable: true,
                isLoading: false,
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
        methods: {
            ...mapMutations('global',['setCurrentBottomSheet','setShowModal']),
            onCitySelect(selected) {
                const [lng, lat] = selected.data.geometry.coordinates;
                this.formBody.zip = selected.data.properties.postcode;
                this.center = latLng(lat, lng);
                this.marker = latLng(lat, lng);
                this.zoom = 14;
            },
            debounceSearch: debounce(async function (query) {
                const response = await ajaxFindArea(query);
                if (response) {
                    console.log(response)
                    this.cities = response;

                }
            }, 500),
            async onFormSubmit(evnt) {
                evnt.preventDefault();
                let formBody = Object.assign({}, this.formBody);
                console.log(formBody)
                debugger;
                const {type, title, description, phone} = formBody;
                const [lng, lat] = formBody.city.data.geometry.coordinates;
                const payload = {

                    "type": type,
                    "title": title,
                    "description": description,
                    "phone": phone,
                    "geojson": {
                        ...formBody.city.data
                    },
                    "location": {
                        "lat": lat,
                        "long": lng
                    }
                };

                const formData = new FormData();
                formData.append('data', JSON.stringify(payload));
                this.upload.forEach(img => formData.append("upload", img));

                // formData.append('data', JSON.stringify(payload));
                // formData.append("upload", this.upload);
                // console.log(formData);
                const res = await makeNewFormRequest(formData);
                if(res){
                    this.setCurrentBottomSheet('PostRequest');
                    this.setShowModal(true)
                }else{
                    this.$swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    });
                }
                // console.log(this.formBody)
                /*const payload = {
                    "type": this.formBody.type,
                    "title": this.formBody.subject,
                    "description": this.formBody.description,
                    "phone": this.formBody.phone,
                    "geojson": {
                        "latlong": "something"
                    },
                    "address1": "req.address1",
                    "state": "req.state",
                    "zip": "req.zip",
                    "location": {
                        "lat": "456789",
                        "long": "45678"
                    },
                    "city": "req.city",
                    "country": "req.country"
                }*/
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
            }
            ,
            async getCurrentLocation() {
                let position;
                try {
                    position = await getCurrentPosition();
                } catch (err) {
                    throw new Error(err)
                    // console.log(error);
                }
                const {latitude, longitude} = position.coords;
                this.formBody.city = await latLngReverse(latitude, longitude);
                this.marker = latLng(latitude, longitude);
                this.center = latLng(latitude, longitude);


                /*if(navigator.geolocation){
                    await navigator.geolocation.getCurrentPosition((data)=>{
                        const {latitude,longitude} = data.coords
                        this.marker = latLng(latitude,longitude);
                        this.center = latLng(latitude,longitude);
                    })
                }*/
            }
            ,
            async onMarkerDrop(arg) {
                // console.log(city.data.properties)
                const {lat, lng} = arg.target.getLatLng()
                const city = await latLngReverse(lat, lng);
                this.formBody.city = city;
                this.formBody.zip = city.data.properties.postcode;

                // console.log(arg.target.getLatLng())
            }
        },
        computed: {
            /*cities:{
                get(){
                    return cities
                }
            },*/
            icon() {
                return icon({
                    iconUrl: require('@/assets/leaflet/marker-icon.png'),
                    shadowUrl: require('@/assets/leaflet/marker-shadow.png'),
                })
            }
            ,
            isMobile() {
                return (isAndroid || isIOS)
            },
            cityName:{
                    get(){
                        return pathOr(null,['city','data','properties','city'],this.formBody)
                    }
            }
        }
        ,
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .map-wrap {
        min-height: 50vh;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        overflow: hidden;
        @include media-breakpoint-down(md) {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            min-height: 60vh;
        }
      /*  @include media-breakpoint-down(sm) {

        }*/
    }

    .req-form {
        .curved-bd {
            color: #ffffff;
            background: #685bb6;
            /*border-top-left-radius: 50px;*/
            border-top-right-radius: 50px;
            max-height: 80vh;
            overflow: hidden;
            @include media-breakpoint-down(md) {
                max-height: 90vh;
                border-top-left-radius: 20px !important;
                border-top-right-radius: 20px !important;
                /*padding: 20px !important;*/
            }

        }

        form {
            input[type="text"] {
                /*border-radius: 20px;*/
                padding: 15px;
                /*height: 50px;*/
            }

            textarea {
                /*border-radius: 20px;*/
                padding: 15px;
                height: 100px;
            }

            input[type="file"] + .custom-file-label {
                /*border-radius: 20px;*/
            }

            button {
                padding: 12px 0px;
            }
        }

        .heading {
            background: #ffe58c;
            width: 100%;

            h1 {
                font-family: Inter;
                font-size: 22px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.4;
                letter-spacing: -0.02px;
                color: #2b2a35;
                margin: 40px 0px;
            }

        }


    }
</style>