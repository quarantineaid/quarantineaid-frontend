<template>
    <div class="d-flex flex-row my-3">
        <div class="image-wrap flex-shrink-0">
            <img :src="imageSrc"/>
        </div>
        <div class="bio-text d-flex flex-grow-1 flex-column">
            <h4 class="name">{{name}}</h4>
            <div class="d-flex flex-row">
                <span>{{category}}</span>
                <span class="sep">|</span>
                <span>category</span>
            </div>
        </div>
        <div class="date d-flex flex-shrink-0 btn-grp justify-content-between">
            <!--            <button class="btn btn-small yellow-border"><img src="@/assets/close.png"></button>-->
            <button @click="onBtnClick" class="btn btn-small yellow-filled"><img src="@/assets/check.png"></button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Volunteers",
        props: {
            name: {
                type: String
            },
            volunteerId: {
                type: String
            },
            picture: {
                type: String
            },
            category: {
                type: String
            },
            situationId: {
                type: String
            }
        },
        computed: {
            imageSrc: {
                get() {
                    return this.picture || require("@/assets/default-user.png")
                }
            },
        },
        methods: {
            ...mapActions('cards', ['updateVolunteerSelection']),
            onBtnClick() {
                this.updateVolunteerSelection({
                    "situationId": this.situationId,
                    "volunteer": this.volunteerId,
                    "name": this.name
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-grp {
        width: 70px;
        align-self: end;

    }

</style>