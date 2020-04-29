<template>
   <section class="footer">
       <div class="container">
           <b-navbar toggleable="lg" class="qa-nav mt-0 container">
               <b-navbar-brand href="#"><img src="@/assets/qa-logo-footer.png" class="qa-logo" /></b-navbar-brand>
               <b-collapse id="nav-collapse" is-nav >
                   <b-navbar-nav class="ml-auto qa-nav-group align-items-lg-center d-lg-flex d-none">
                       <b-nav-item href="javascript:void(0)" v-scroll-to="'#map'" class="mx-md-2 mx-xl-3">Cases</b-nav-item>
                       <b-nav-item href="javascript:void(0)" v-scroll-to="'#about'">About</b-nav-item>
                       <b-nav-item href="#/login" class="mx-md-2 mx-xl-3" v-scroll-to="'#support'">Support</b-nav-item>
                   </b-navbar-nav>
               </b-collapse>
           </b-navbar>
       </div>
   </section>
</template>

<script>
    import {BNavbar,BNavbarBrand,BCollapse,BNavbarNav,BNavItem} from 'bootstrap-vue'
    export default {
        name: "Footer",
        components:{
            BNavbar,BNavbarBrand,BCollapse,BNavbarNav,BNavItem
        }
    }
</script>

<style scoped lang="scss">
    .footer{
        background: #685bb6;
    }
.qa-logo{
    width: 176px;
    height: auto;
}
    .qa-nav{
        border-radius: 20px;
        background-color: #493c94;
        margin: 50px auto!important;
    }
    .navbar-light .navbar-nav .nav-link{
        color: #ffffff;
        &:hover{
            color: #ffffff;
            opacity: 0.8;
        }
    }
</style>