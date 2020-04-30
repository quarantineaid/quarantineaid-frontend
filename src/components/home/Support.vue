<template>
    <section class="support" id="support">
        <div class="container d-flex flex-column">
            <h3 class="heading my-5">Who are we?</h3>
            <div class=" d-flex justify-content-center align-content-between mb-5 flex-column flex-xl-row">
                <BioCard
                    name="Atul Khola"
                    designation="product designer"
                    statement="believes in making products look awesome while being functional."
                    :image-path="require('@/assets/developers/atul.png')"
                ></BioCard>
                <BioCard
                        name="Srinivas Gowda"
                        designation="Engineer"
                        statement="Software professional by day, amateur mixologist and professional dog cuddler by night"
                        :image-path="require('@/assets/srini.png')"
                ></BioCard>
                <BioCard
                        name="Karthik Srinivas"
                        designation="Engineer"
                        statement="love to code - travel - sketch"
                        :image-path="require('@/assets/Karthik.png')"
                ></BioCard>
            </div>
            <p class="text-center d-flex align-self-center support-text my-4">QuarantineAid.in was built by Srinivas Gowda, Karthik Srinivas & Atul Khola in
                Bangalore. You can help us with this product.</p>
            <div class="d-flex justify-content-center">
                <a class="btn support-btn" href="mailto:srinivas@solancer.com?subject=Support Enquiry">support us</a>
            </div>
        </div>
    </section>

</template>

<script>
    import BioCard from "../BioCard";

    export default {
        name: "Support.vue",
        components: {
            BioCard
        }
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .support {
        background: #685bb6;

        .heading {
            font-size: 40px;
            font-weight: 800;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: -0.02px;
            text-align: center;
            color: #ffffff;
            margin-top: 100px;
        }


        .bio-card {
            @include media-breakpoint-down(lg){
                margin: 40px 0px;
            }
            margin: 0px 20px;
        }
        .support-text{
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: -0.02px;
            text-align: center;
            color: #ffffff;
            max-width: 600px;
            &+div > .support-btn{
                /*background: red;*/
                border-radius: 20px;
                min-width: 346px;
                padding: 14px;
                background-color: #ffe58c;
                font-size: 22px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.4;
                letter-spacing: -0.02px;
                color: #2b2a35;
                margin: 30px auto 100px;
            }
        }
    }


</style>