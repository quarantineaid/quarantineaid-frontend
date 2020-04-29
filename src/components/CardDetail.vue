<template>
    <div class="card-detail d-flex flex-column">
        <div class="row mb-3 mx-3">
            <div class="col-12 col-xl-6 tab-group d-flex justify-content-lg-start p-0">
                <button type="button" class="btn btn-tab mr-4 shadow-none" @click="onTabChange(index)"
                        :key="index"
                        :class="{'active':currentTabIndex === index}"
                        v-for="(tab,index) in tabConfig[this.currentTab].tabs">{{tab.name}}
                </button>
            </div>
        </div>
        <MapCardDetail></MapCardDetail>
        <!-- <div class="card-detail-wrap d-flex flex-row">
             <div class="flex-grow-1 d-none d-xl-flex map-wrap flex-shrink-0 col p-0">
                 <h1>Maps</h1>
             </div>
             <div class="col px-0 cases d-flex flex-column flex-grow-1 flex-shrink-0" v-if="showList">
                 <div class="d-flex cases-wrap flex-shrink-0 justify-content-between align-self-center">
                     <h1>cases</h1>
                     <div>
                         <button class="btn-current" @click="onFilterClick"><img src="@/assets/control.png" alt="">
                         </button>
                     </div>
                 </div>
                 <div class="cases-list-wrap d-flex flex-column flex-fill">
                     <perfect-scrollbar class="col p-0 flex-shrink-1 position-relative">
                         <case-card @cardClick="showDetailsView"></case-card>
                         <case-card @cardClick="showDetailsView"></case-card>
                         <case-card @cardClick="showDetailsView"></case-card>
                         <case-card @cardClick="showDetailsView"></case-card>
                         <case-card @cardClick="showDetailsView"></case-card>
                     </perfect-scrollbar>

                 </div>
             </div>
             <div class="flex-grow-1 d-none d-lg-flex flex-shrink-0 details col p-0" v-if="showDetails">
                 <div class="details-desc d-flex flex-column flex-fill">
                     <perfect-scrollbar class="col p-0 flex-shrink-1 position-relative">
                         <h1>details</h1>
                         <button class="btn-current d-block d-md-none" @click="showListView"><img
                                 src="@/assets/control.png"
                                 alt=""></button>

                         <div class="img-cover">
                             <img src="@/assets/dummy/med.jpg" alt="">
                         </div>
                         <h2 class="title my-4">Lorem ipsum dolor sit amet</h2>
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
                     </perfect-scrollbar>

                 </div>
             </div>
         </div>-->
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import MapCardDetail from "./MapCardDetail";

    export default {
        name: "CardDetail",
        components: {
            MapCardDetail,
        },
        props: {
            currentTab: {
                type: String,
                default: 'helping'
            },
            tabConfig: {
                type: Object,
            }
        },
        data() {
            return {
                showDetails: true,
                showList: true,
                currDetailComp: 'VolunteerButton'
            }
        },
        methods: {
            ...mapMutations('global', ['setCurrentTabIndex', 'setCurrentDetailComponent', 'setCurrentBottomSheet', 'setShowModal']),
            onTabChange(index) {
                this.setCurrentTabIndex(index);
                this.setDetailComp();
            },
            setDetailComp() {
                this.setCurrentDetailComponent(this.tabId)
            }
            /*
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
            showDetailsView() {
                if (screen.width < 768) {
                    this.showList = false;
                    this.showDetails = true;
                }

            },
            setDetailComp() {
                this.setCurrentDetailComponent(this.tabId)
            }*/
        },
        watch: {
            currentTab() {
                this.setCurrentTabIndex(0);
                this.setDetailComp();
                // this.showListView();
            }
        },
        mounted() {
            /*this.showListView();
            this.setCurrentTabIndex(0);
            this.setDetailComp();*/
            // document.querySelector("#want-to-help").classList.add("d-none")
        },
        computed: {
            ...mapState('global', ['currentTabIndex', 'currentDetailComponent']),
            tabId: {
                get() {
                    return this.tabConfig[this.currentTab].tabs[this.currentTabIndex].id
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .card-detail {
        min-height: calc(100vh);
        max-height: calc(100vh);
        /*min-height: calc(100vh);*/
        /*border-radius: 50px;*/
        /*max-height: 100vh;*/
        margin-bottom: 30px;
        overflow: hidden;
        .row{
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap;
        }
        .tab-group {

            .btn-tab {
                margin-bottom: 24px;
                font-family: Inter;
                font-size: 20px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.4;
                letter-spacing: -0.02px;
                color: #ffffff;
                height: 58px;
                padding: 0;
                @include media-breakpoint-down(md) {
                    font-size: 18px;
                }
                @include media-breakpoint-down(sm) {
                    height: 38px;
                    font-size: 14px;

                }

                &.active {
                    padding: 0px 25px;
                    border-radius: 20px;
                    border: solid 2px rgba(255, 255, 255, 0.5);
                    background-color: rgba(255, 255, 255, 0.2);
                    @include media-breakpoint-down(sm) {
                        border-radius: 13.3px;
                        height: 38px;
                        font-size: 14px;

                    }
                }
            }
        }


    }
</style>