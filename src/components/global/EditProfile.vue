<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 my-5">
            <div class="text-center">
                <ProfilePicture class="oval"/>
            </div>
            <div class="form-group">
                <input id="name" type="text" class="form-control" placeholder="Name"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block btn-purple">Update</button>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfilePicture from "../ProfilePicture";
    export default {
        name: "EditProfile",
        components:{
            ProfilePicture
        }
    }
</script>

<style scoped>

</style>