export default {
    getCity(state){
        return state.city
    },
    getType(state){
        return state.type.split(",").filter(str=>!!str)
    }
}