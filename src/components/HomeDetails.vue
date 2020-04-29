<template>
    <fragment>
        <Hero></Hero>
        <Map></Map>
        <Questions></Questions>
        <Support></Support>
        <Footer></Footer>
    </fragment>
</template>

<script>
    import Hero from './home/Hero';
    import Map from './home/Map';
    import Questions from "./home/Questions";
    import Support from "./home/Support";
    import Footer from "./home/Footer";

    export default {
        name: 'HomeDetails',
        components:{
            Hero,Map,Questions,Support,Footer,
        }
    }
</script>
<style scoped lang="scss">

</style>
