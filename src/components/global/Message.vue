<template>
    <div class="container-fluid p-0 auth">
        <div class="row m-0">
            <div class="m-auto col-12 col-lg-6 p-5 d-flex justify-content-center align-items-center">
                <div class="row d-flex justify-content-center align-items-center align-self-center">
                    <div class="col-12">
                        <div class="text-center">
                            <div class="oval"></div>
                            <h2> {{getMessage}}</h2>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Message",
        computed:{
            ...mapGetters('global',['getMessage'])
        }
    }
</script>

<style scoped>

</style>