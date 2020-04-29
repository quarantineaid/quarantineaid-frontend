import {pathOr} from "ramda";

export default {
    listOfCards(state){
        return pathOr([],['cardData','docs'],state)
    },
    getPageData(state){
        if(state.cardData){
            // eslint-disable-next-line no-unused-vars
            const {docs,...pageData} = state.cardData;
            return pageData;
        }else {
            return  null;
        }
    },
    getCurrentCardIndex(state){
        return state.currentCardIndex
    },
    hasPageLoaded(state){
        debugger;
        return state.pageLoaded
    }
}