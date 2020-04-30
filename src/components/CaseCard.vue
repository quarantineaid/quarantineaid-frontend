<template>
    <div class="case-card active" @click="emitCardClick">
        <div class="d-flex flex-column">
            <div class="d-flex flex-row">
               <div class="image-wrap flex-shrink-0">
                   <img :src="getUserProfile" alt="">
               </div>
                <div class="bio-text d-flex flex-grow-1 flex-column">
                    <h4 class="name">{{dataObj.requester.name}}</h4>
                    <div class="d-flex flex-row">
                        <span class="category">{{dataObj.type}}</span>
                        <span class="sep">|</span>
                        <span>category</span>
                    </div>
                </div>
                <div class="date d-flex flex-shrink-0 justify-content-end">{{getFormatedData}}</div>
            </div>
            <div class="description">
                <h4>{{dataObj.title}}</h4>
                <p>{{dataObj.description}}</p>
<!--                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto corporis dignissimos eveniet hic itaque maxime, nemo nobis omnis perferendis praesentium repudiandae rerum soluta vel voluptate? Ipsa quidem ullam veritatis!</p>-->
<!--                <p class="m-0">{{dataObj.description}}</p>-->
            </div>
            <div class="attach">
                {{dataObj.images.length}} images attached
            </div>
        </div>
    </div>
</template>

<script>
    import format from 'date-fns/format';
    import {pathOr} from "ramda";

    export default {
        name: "CaseCard",
        props:{
            dataObj:{
                type:Object
            },
            index:{
                type:Number
            }
        },
        methods:{
            emitCardClick(){
                this.$emit("cardClick",this.index)
            }
        },
        computed:{
            getFormatedData:{
                get(){
                    return format(
                        new Date(this.dataObj._created_at),
                        'dd MMM'
                    )
                }
            },
            getUserProfile:{
                get(){
                    return pathOr(null,['requester','picture'],this.dataObj) || require("@/assets/default-user.png")
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .description{
        h4{
            max-width: 17vw;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            @include media-breakpoint-down(md) {
                max-width: 60vw;
            }
        }
    }
    .case-card{
        cursor: pointer;
    }
</style>