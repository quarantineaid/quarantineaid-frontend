<template>
    <div class="d-flex flex-column h-100 req-body">
        <TopNav @showBottomSheet="showBottomSheet">
            <button slot="back" class="btn d-inline-flex d-md-none btn-back" @click="$router.go(-1)"><img src="@/assets/back.svg" alt=""></button>

        </TopNav>
        <div class="d-flex flex-fill overflow-auto flex-column ">
              <ReqForm />
        </div>
    </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import ReqForm from "../components/global/ReqForm";

    export default {
        name: "MobCreateReq",
        components:{
            TopNav,
            ReqForm
        },
        methods:{
            showBottomSheet(){
                debugger;
            }
        }
    }
</script>

<style scoped lang="scss">
.btn.btn-back{
    width: 40px;
    height: 40px;
    border-radius: 12px!important;
    background-color: #f2f4f8!important;
    img{
        width: 7px;
        height: 14px;
    }
}
</style>