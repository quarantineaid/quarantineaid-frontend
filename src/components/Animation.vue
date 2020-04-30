<template>
    <div class="custom-fluid">
        <lottie v-if="start" :options="defaultOptions" @animCreated="handleAnimation"/>
        <img class="hero-image" src="@/assets/hero-image.png" v-if="!start" alt="">
    </div>
</template>

<script>
import lottieJsonData from '../assets/animation/data.json'

export default {
    props:{
        start:{
            type:Boolean,
            required:true,
            default:false
        },
    },
    data() {
        return {
            defaultOptions: { animationData: lottieJsonData },
            animationSpeed: 1,
        }
  },
    methods:{
        handleAnimation(anim){
            this.anim = anim;
        }
    },
    watch:{
        start:{
            handler(newVal){
                // debugger;
                if(newVal){
                    this.anim.play();
                }else{
                    this.anim.stop();
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .hero-image{
        width: 100%;
        max-width: 500px;
        height: auto;
    }
</style>
