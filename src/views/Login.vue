<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <form class="form-signin d-flex flex-column justify-content-center" autocomplete="off">
<!--                    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
                    <h1 class="h3 mb-3 font-weight-normal text-center">Welcome back!</h1>

                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="inputPassword">Email</label>
                                <input type="email" id="inputPassword" class="form-control"/>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="inputZipcode">Password</label>
                                <input type="password" id="inputZipcode" class="form-control"/>
                            </div>

                        </div>
                    </div>

                    <!--<label for="inputEmail" class="sr-only">Email</label>
                    <input type="email" id="inputEmail" class="form-control" name="email" placeholder="Email"  v-validate="'required|email'">
                    <span>{{ errors.first('email') }}</span>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" >-->
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    <button class="btn btn-primary btn-block" type="submit">Sign in</button>
                    <p class=" mb-3 text-muted reg-block mt-2">Haven't registered yet? <router-link to="signup">Register now</router-link> </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped lang="scss">
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
        height: 100vh;
        img{
            margin: 0 auto;

        }
        .checkbox {
            font-weight: 400;
        }
        .form-control {
            position: relative;
            box-sizing: border-box;
            height: auto;
            padding: 10px;
            font-size: 16px;
            &:focus {
                z-index: 2;
            }
        }
        input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        .reg-block{
            font-size: 0.9rem;
        }
    }
</style>