<template>
    <div class="container question d-flex flex-column justify-content-center" id="about">
        <h3>Got questions?</h3>
        <div class="row">
            <div class="col-lg-4 p-0">
                <div class="question-each">
                    <div class="back-drop"></div>
                    <div class="oval">
                        <img src="@/assets/questions/1.png" alt="">
                    </div>
                    <h4>What is QuarantAid?</h4>
                    <p>Quarantaid.me connects those in need with volunteers who are able to help them. This is particularly
                        important during this period of quarantine and self-isolation due to COVID-19.</p>
                </div>

            </div>
            <div class="col-lg-4 p-0">
                <div class="question-each">
                    <div class="back-drop"></div>
                    <div class="oval">
                        <img src="@/assets/questions/3.png" alt="">
                    </div>
                    <h4>How does it work?</h4>
                    <p>Quarantaid.me connects those in need with volunteers who are able to help them. This is particularly
                        important during this period of quarantine and self-isolation due to COVID-19.</p>
                </div>

            </div>
            <div class="col-lg-4 p-0">
                <div class="question-each">
                    <div class="back-drop"></div>
                    <div class="oval">
                        <img src="@/assets/questions/4.png" alt="">
                    </div>
                    <h4>Is it free?</h4>
                    <p>Quarantaid.me connects those in need with volunteers who are able to help them. This is particularly
                        important during this period of quarantine and self-isolation due to COVID-19.</p>
                </div>

            </div>

        </div>
        <div class="row">
            <div class="col-lg-4 p-0">
                <div class="question-each">
                    <div class="back-drop"></div>
                    <div class="oval">
                        <img src="@/assets/questions/2.png" alt="">
                    </div>
                    <h4>Who are the volunteers?</h4>
                    <p>Quarantaid.me connects those in need with volunteers who are able to help them. This is particularly
                        important during this period of quarantine and self-isolation due to COVID-19.</p>
                </div>

            </div>
            <div class="col-lg-4 p-0">
                <div class="question-each">
                    <div class="back-drop"></div>
                    <div class="oval">
                        <img src="@/assets/questions/5.png" alt="">
                    </div>
                    <h4>Is it safe?</h4>
                    <p>Quarantaid.me connects those in need with volunteers who are able to help them. This is particularly
                        important during this period of quarantine and self-isolation due to COVID-19.</p>
                </div>

            </div>
            <div class="col-lg-4 p-0">
                <div class="question-each">
                    <div class="back-drop"></div>
                    <div class="oval">
                        <img src="@/assets/questions/6.png" alt="">
                    </div>
                    <h4>Who should use this?</h4>
                    <p>Quarantaid.me connects those in need with volunteers who are able to help them. This is particularly
                        important during this period of quarantine and self-isolation due to COVID-19.</p>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Questions"
    }
</script>

<style scoped lang="scss">
    .question {
        min-height: 100vh;
        /*padding: 1.5rem 0px;*/
        background: #ffffff;
        &-each{
            padding: 1.563rem 1.875rem;
            min-height: 161px;
            background: #ffffff;
            position: relative;
            z-index: 1;
            .back-drop{
                height: 100%;
                width: 100%;
                z-index: -1;
                position: absolute;
                left: 0;
                top: 0;
                transform: scale(1);
                transition: transform 0.2s ease;
            }
            &:hover{
                z-index: 2;
                .back-drop{
                    z-index: -1;
                    background: #ffe58c;
                    transform: scale(1.08);
                    transition:  transform 0.5s ease;
                    border-radius: 10px;
                }
            }
        }
        & .row:first-of-type {
            .question-each{
                border-right:1px solid #f2f4f8;
                border-bottom: 1px solid #f2f4f8;
                .oval {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            & .col-lg-4:last-of-type .question-each{
                border-right: none;
            }
        }
        & .row:last-of-type{
            .question-each{
                border-right:1px solid #f2f4f8;
                .oval {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            & .col-lg-4:last-of-type .question-each{
                border-right: none;
            }
        }

        h4 {
            font-size: 22px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: -0.02px;
            text-align: center;
            color: #2b2a35;
        }
        p{
            opacity: 0.5;
            font-family: Inter;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: -0.01px;
            text-align: center;
            color: #2b2a35;
            min-height: 161px;
        }

        h3 {
            font-family: Inter;
            font-size: 40px;
            font-weight: 800;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: -0.02px;
            text-align: center;
            color: #2b2a35;
            margin-bottom: 50px;
        }


    }
</style>