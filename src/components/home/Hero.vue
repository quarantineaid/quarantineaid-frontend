<template>
    <div class="container" id="hero">
        <div class="hero-banner row">
            <div class="col-lg-12 col-xl-6 align-self-center">
                <h1 class="hero-banner-heading">
                    connecting <a href="#" @mouseover="setAnim(true)" @mouseleave="setAnim(false)">those</a> in need to
                    <a href="#" @mouseover="setAnim(true)" @mouseleave="setAnim(false)">those</a> who can help during COVID 19.
                </h1>

                <h2 class="hero-banner-heading-sm">you can make a difference</h2>

<!--                <div class="card-wrap d-none d-md-flex d-flex justify-content-around justify-content-md-between flex-wrap">-->
                <div class="card-wrap d-md-flex d-flex justify-content-around flex-wrap">
                    <div class="card">
                        <p>situations</p>
                        <h4>3,374</h4>
                    </div>
                    <div class="card">
                        <p>in progress</p>
                        <h4>3,374</h4>
                    </div>
                    <div class="card">
                        <p>helped</p>
                        <h4>3,374</h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-6  col-md-12 d-none d-xl-block align-self-center">
                <Animation :start="startAnim" />
            </div>
        </div>
    </div>
</template>

<script>
    import { TimelineMax,Back } from "gsap";
    import Animation from '../Animation'

    export default {
        name: "Hero",
        components: {Animation},
        data(){
            return {
                startAnim:false,
            }
        },
        mounted() {
            let toolTimeline = new TimelineMax();
            let duration = .9;
            toolTimeline.staggerTo('.card', duration, {
                bottom: 0,
                scale:1,
                ease:Back.easeInOut,
                opacity:1
                // the first number is for the array and the amount of time between each item
                // the second number is the amount of time is takes to complete the animation within the duration. So it'll take .7seconds to complete within the 1sec animation
            }, .2, .7);

            let title1 = new TimelineMax();
            title1.staggerFromTo(".hero-banner-heading", 0.5,
                {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
                {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
        },
        methods:{
            setAnim(val){
                debugger;
                this.startAnim = val;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .hero-banner {
        min-height: calc(100vh - 100px);
        overflow: hidden;
        &-heading {
            font-size: 3.25rem;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.43;
            letter-spacing: -0.02px;
            color: #2b2a35;
            /*margin-top: 80px;*/
            max-width: 590px;
            @include media-breakpoint-down(lg){
                margin-top: 30px;
                max-width: 100%;
                font-size: 2rem;
            }
            a{
                color: #fe815e;
                &:hover{
                    text-decoration: none;
                }
            }
            &-sm {
                font-size: 2.25rem;
                color: #2b2a35;
                opacity: 0.5;
            }
        }
        .card-wrap{
            margin-top: 50px;
            position: relative;
            @include media-breakpoint-down(lg){
                margin-top: 40px;
            }
            .card{
                opacity: 0;
                width: 198px;
                border-radius: 20px;
                box-shadow: 0 20px 40px -10px rgba(139, 142, 149, 0.1);
                border: solid 1px #f2f4f8;
                background-color: #ffffff;
                position: relative;
                bottom: -300px;
                transform: scale(0);
                @include media-breakpoint-between(xs,lg){
                    margin: 10px;
                }
                p{
                    opacity: 0.5;
                    font-size: 22px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.4;
                    letter-spacing: -0.02px;
                    color: #2b2a35;
                    text-align: center;
                    margin-top: 20px;
                }
                h4{
                    font-size: 40px;
                    font-weight: 800;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.4;
                    letter-spacing: -0.02px;
                    color: #2b2a35;
                    text-align: center;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>