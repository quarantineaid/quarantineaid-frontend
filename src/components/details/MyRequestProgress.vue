<template>
    <fragment>
        <div class="volunteers-list my-5">
            <h1 class="m-0">assisting person</h1>
            <p class="text-muted">You can only accept help from one person at once.</p>
            <div class="d-flex flex-row my-3">
                <div class="image-wrap flex-shrink-0">
                    <img :src="imageSrc" alt="">
                </div>
                <div class="bio-text d-flex flex-grow-1 flex-column">
                    <h4 class="name">{{volunteerList[0].name}}</h4>
                    <div class="d-flex flex-row">
                        <span>{{detail.type}}</span>
                        <span class="sep">|</span>
                        <span>category</span>
                    </div>
                </div>
                <div class="date d-flex flex-shrink-0 btn-grp justify-content-between">
<!--                    <button  class="btn btn-small white-filled"><img src="@/assets/danger.png"></button>-->
                </div>
            </div>
        </div>
        <div class="row d-flex my-5 m-0">
            <div class="col-12 col-md-6">
                <button class="btn btn-outline-yellow btn-block mb-4" @click="onBtnClick(false)">couldn’t help</button>
            </div>
            <div class="col-12  col-md-6">
                <button class="btn btn-yellow btn-block" @click="onBtnClick(true)">resolved</button>
            </div>
        </div>
    </fragment>
</template>

<script>
    import {mapActions} from "vuex";
    import {pathOr} from "ramda";

    export default {
        name: "MyRequestProgress",
        props:{
            detail:{
                type:Object,
                required:true
            }
        },
        computed: {
            imageSrc: {
                get() {
                    return this.volunteerList[0].picture || require("@/assets/default-user.png")
                }
            },
            volunteerList:{
                get(){
                    return pathOr([],['volunteers','acceptedByVolunteer'],this.detail)
                }
            }
        },
        methods: {
            ...mapActions('cards', ['updateRequestStatus']),
            onBtnClick(bool) {
                this.updateRequestStatus({
                    "situationId": this.detail._id,
                    "resolved": bool
                })
            },
        },

    }
</script>

<style scoped>

</style>