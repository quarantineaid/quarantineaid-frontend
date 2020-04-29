<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
                <form class="form-signup d-flex flex-column justify-content-center" autocomplete="off">
                    <!--                    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
                    <h1 class="h3 font-weight-normal">Register to Volunteer</h1>
                    <p class="text-muted mb-3 sub-heading">We'll notify you of requests for help in your area.</p>
                    <div class="row">
                        <div class="col-xs-12 col-lg-6">
                            <div class="form-group">
                                <label for="inputFirstName">First Name</label>
                                <input type="text" id="inputFirstName" class="form-control" required/>
                            </div>

                        </div>
                        <div class="col-xs-12 col-lg-6">
                            <div class="form-group">
                                <label for="inputLastName">Last Name</label>
                                <input type="text" id="inputLastName" class="form-control" required/>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" id="inputEmail" class="form-control" required/>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="inputPassword">Password</label>
                                <input type="password" id="inputPassword" class="form-control" required/>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="inputZipcode">Zip Code</label>
                                <input type="password" id="inputZipcode" class="form-control" required/>
                            </div>

                        </div>
                    </div>
                    <button class="btn btn-primary btn-block" type="submit">Sign up</button>
                    <p class="text-muted tc-text mt-1">By clicking the <b>Sign up</b> button above, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Signup.vue"
    }
</script>

<style scoped lang="scss">
.form-signup{
    height: 100vh;
    .tc-text{
        font-size: 0.8rem;
    }
    .sub-heading{
        font-size: 0.9rem;
    }
}
</style>