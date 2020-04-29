<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    import {mapMutations} from "vuex";

    export default {
        name: "App",
        methods:{
            ...mapMutations("account",['updateUserObject']),
            ...mapMutations("card",['updateCards'])
        },
        mounted() {
          const usrStr = localStorage.getItem("usr")
            if(usrStr){
                // debugger;
              let userInfo;
              try {
                userInfo = JSON.parse(localStorage.getItem("usr"))
              }catch (e) {
                this.updateUserObject(null);
                this.$router.replace({name:"Home"});
              }
              if(userInfo){
                  // debugger
                this.$router.replace({name:"Volunteer"});
                this.updateCards(null);
              }
              this.updateUserObject({info:userInfo});
            }else {
              this.$router.replace({name:"Home"});
            }
        }
    }
</script>
<style lang="scss">

</style>
