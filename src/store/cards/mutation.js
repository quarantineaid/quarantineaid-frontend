import Vue from 'vue';

export default {
    updateCards(state,cardsData){
        if(cardsData){
            if(!state.cardData){
                state.currentCardIndex = 0;
                Vue.set(state,'cardData',cardsData)
            }else{
                /*const {docs,...restData} = cardsData;
                // console.log({docs:[...docs,...state.cardData.docs]})
                console.log(restData);
                state.cardData = {...restData,docs:[...state.cardData.docs,...docs]};
                console.log(state);*/
                const {docs,...restData} = cardsData;
                // state.cardData = Object.assign({},{...restData,docs:[...state.cardData.docs,...docs]})
                Vue.set(state,'cardData',{...restData,docs:[...state.cardData.docs,...docs]})
                debugger;
            }

        }else{
            Vue.set(state,'cardData',null)
        }

    },
    updateCurrentCardIndex(state,index) {
        state.currentCardIndex = index;
    },
    updateLoaded(state,status){
        debugger;
        state.pageLoaded = status
    }
}