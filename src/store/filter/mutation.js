import Vue from "vue";

export default {
    setFilterType(state,category){
        Vue.set(state,'type',category);
    },
    setFilterCity(state,city){
        state.city = city;
        // debugger;
        // Vue.set(state,'city',city);
    }
}