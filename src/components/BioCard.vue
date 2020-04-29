<template>
    <div class="bio-card justify-content-center align-items-center">
        <div class="bio-details p-3">
            <div class="d-flex img-block">

                <img 
                    :src="imagePath"

                >

            </div>
            <div class="d-flex name-block">
                <div class="flex-row">
                    <span class="name">{{name}}</span>
                    <span class="sep">|</span>
                    <span class="desg">{{designation}}</span>
                </div>
            </div>
            <div class="d-flex desc">
                <p>
                    {{statement}}
                </p>
            </div>
            <div class="d-flex social-media mt-30">
                <slot name="social"></slot>
                <!--<img
                    src="@/assets/social/gmail.png"
                    srcset="@/assets/social/gmail@2x.png, @/assets/social/gmail@3x.png"
                    alt=""
                >
                <img
                    src="@/assets/social/linkedin.png"
                    srcset="@/assets/social/linkedin@2x.png, @/assets/social/linkedin@3x.png"
                    alt=""
                >
                <img
                    src="@/assets/social/behance.png"
                    srcset="@/assets/social/behance@2x.png, @/assets/social/behance@3x.png"
                    alt=""
                >
                <img
                    src="@/assets/social/dribble.png"
                    srcset="@/assets/social/dribble@2x.png, @/assets/social/dribble@3x.png"
                    alt=""
                >
                <img
                    src="@/assets/social/insta.png"
                    srcset="@/assets/social/insta@2x.png, @/assets/social/insta@3x.png"
                    alt=""
                >-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BioCard",
        props:{
            name:{
                type:String
            },
            designation:{
                type:String
            },
            statement:{
                type:String
            },
            imagePath:{
                type:String
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";
    .bio-card {
        border-radius: 22px;
        min-height: 300px;
        background: #ffffff;
        flex-basis: 33.333%;
        transform: scale(1);
        transition: all 0.5s ease;
        @include media-breakpoint-down(lg){
            flex-basis: 100%;
        }
        &:hover{
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
            margin: 0px 30px;
            flex-basis: 50%;
            transform: scale(1.12);
            transition: all 0.5s ease;
            @include media-breakpoint-down(lg){
                flex-basis: 100%;
            }

            & .img-block{
                width: 250px;
                height: 250px;
                transform: scale(1.5);
                transition: all 0.5s ease;
                img{
                    object-fit: contain;

                }
            }

        }
        .bio-details {
            .img-block{
                width: 200px;
                height: 200px;
                margin: 0 auto;
                transform: scale(1);
                transition: all 0.5s ease;
                img{
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
            }
            .name-block{
                justify-content: center;
                min-width: 0;
                margin-top: 6%;
                .name {
                    font-family: Inter;
                    font-size: 22px;
                    font-weight: 700;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.4;
                    letter-spacing: -0.01px;
                    color: #2b2a35;
                }
                .sep{ 
                    opacity: 0.5;
                    color: #2b2a35;
                    margin: 0 8px;
                }
                .desg{
                    font-family: Inter;
                    font-size: 22px;
                    font-weight: 300;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.4;
                    letter-spacing: -0.01px;
                    opacity: 0.5;
                    color: #2b2a35;
                }
            }
            .desc {
                justify-content: center;
                min-width: 350px;
                width: 80%;
                margin: 0 auto;

                p {
                    height: 46px;
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.4;
                    letter-spacing: -0.01px;
                    text-align: center;
                    color: #2b2a35;

                }
            }
            .social-media {
                justify-content: space-evenly;
                margin-top: 4%;
                img {
                    max-width: 51px;
                    flex-basis: 20%;
                }
            }
        }
    }
</style>