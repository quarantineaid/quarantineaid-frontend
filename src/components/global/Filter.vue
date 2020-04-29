<template>
    <div class="filter-wrap d-flex align-items-center justify-content-center">
        <div class="left d-flex flex-grow-1 flex-shrink-0 flex-column">
            <p class="filter-label">Filter by type of request</p>
            <b-form-group>
                <b-form-checkbox-group id="checkbox-group-2" name="flavour-2" stacked v-model="category">
                    <b-form-checkbox value="food">Food</b-form-checkbox>
                    <b-form-checkbox value="medicine">Medicine</b-form-checkbox>
                    <b-form-checkbox value="masks">Masks</b-form-checkbox>
                    <b-form-checkbox value="others">Others</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <div class="form-group d-flex flex-column">
                <label for="zipcode">Search by City</label>
                <multiselect v-model="selectedCities" :options="cities" :show-labels="false"></multiselect>
            </div>
            <button class="btn btn-purple" @click="onApplyFilter">Apply Filters</button>
        </div>
    </div>
</template>

<script>
    import {BFormGroup, BFormCheckboxGroup, BFormCheckbox} from 'bootstrap-vue';
    import {cities} from "../../utils/static";
    import Multiselect from 'vue-multiselect'
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
    export default {
        name: "FilterComp",
        components: {
            BFormGroup, BFormCheckboxGroup, BFormCheckbox,Multiselect
        },
        data(){
            return {
                // selectedCities:'',
                // category:[],
            }
        },
        mounted(){
            debugger;
        },
        methods:{
            ...mapMutations('filter',['setFilterType','setFilterCity']),
            ...mapMutations('global',['setShowModal']),
            ...mapActions('cards',['getCards']),
            onApplyFilter(){
                this.getCards({clearCards:true})
                this.setShowModal(false)
                // this.$emit("triggerClose")
            }
        },
        computed:{
            ...mapGetters('filter',['getCity','getType']),
            cities:{
                get(){
                    return cities
                }
            },
            selectedCities:{
                get(){
                    return this.getCity
                },set(value){
                    this.setFilterCity(value)
                }
            },
            category:{
                get(){
                    return this.getType
                },set(value){
                    this.setFilterType(value.join(','))
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .filter-wrap {
        border-top-right-radius: 50px;
        border-top-left-radius: 50px;
        padding: 30px;

        /*background: #ffe58c;*/
        color: #2b2a35;
        .left{
            max-width: 300px;
            input[type="text"]{
                width: 100%;
                padding: 18px 38px;
                border-radius: 20px;
                -webkit-box-shadow: 0 20px 40px -10px rgba(139, 142, 149, 0.1);
                box-shadow: 0 20px 40px -10px rgba(139, 142, 149, 0.1);
                border: solid 1px #f2f4f8;
                font-size: 18px;
                height: 50px;
            }
            .custom-control-input:checked ~ .custom-control-label::before{
                background: #685bb6;
                border-color: #7473b6;
            }
        }
        .custom-checkbox{
            margin-bottom: 20px;
        }
        .filter-label , label{
            font-size: 20px!important;
            font-weight: 500;
        }

    }
</style>