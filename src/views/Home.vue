<template>
  <div class="d-flex flex-column">
    <TopNav @showBottomSheet="showBottomSheet"></TopNav>
    <HomeDetails></HomeDetails>
    <BottomSheet v-model="show"></BottomSheet>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeDetails from '@/components/HomeDetails.vue'
import BottomSheet from "../components/BottomSheet";
import TopNav from "../components/TopNav";
import {mapMutations} from 'vuex';
// import {BNavbar,BNavbarBrand,BNavbarToggle,BCollapse,BNavbarNav,BNavItem} from 'bootstrap-vue'
export default {
  name: 'Home',
  components: {
    HomeDetails,BottomSheet,TopNav
  },
  data(){
    return{
      show:false
    }
  },
  methods:{
    showBottomSheet(){
      this.show = true;
    }
  },
  mounted() {
    document.querySelector("body").classList.remove("yellow-bg");
    if(this.$route.query.section){
      this.$scrollTo(document.querySelector(`#${this.$route.query.section}`), 1000)
    }
  }
}
</script>
<style lang="scss" scoped>


</style>
