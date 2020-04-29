import {doVolunteer, fetchAllCards, volunteerStatusUpdate} from "../../servies/cards";
import {pathOr} from "ramda";


const getCards = async ({dispatch, commit, state, rootState}, filterObj) => {
    const hasPage = pathOr(null, ['cardData', 'hasNextPage'], state);
    //filters,resetPage
    let filters = pathOr({...rootState.filter}, ['filters'], filterObj)
    const resetPage = pathOr(false, ['resetPage'], filterObj);
    const clearCards = pathOr(false, ['clearCards'], filterObj);

    const location = pathOr({}, ['location'], filterObj);
    filters = {...filters,...location};

    if (resetPage||clearCards) {
        commit("updateCards", null);
    }

    console.log(rootState);

    let page = 1;
    if (hasPage && !(resetPage||clearCards)) {
        page = pathOr(null, ['cardData', 'page'], state);
        ++page;
    }
    let cardObj = await fetchAllCards(rootState.global.currentUrl, filters, {page: page});

    if (cardObj) {
        if (resetPage) {
            let {docs, ...restData} = cardObj;
            restData = {...restData, limit: 10, page: Math.ceil(restData.totalDocs / 10)}
            cardObj = {docs, ...restData};
        }
        commit("updateCards", cardObj);
    } else {
        commit("updateCards", null);
    }
};

const wouldVolunteer = async ({dispatch, commit, state}, id) => {

    const res = await doVolunteer(id);

    if (res) {
        //update filter
        dispatch('getCards', {filters: {limit: state.cardData.totalDocs}, resetPage: true})
        await commit("global/setMessageText", `Thanks for showing interest, your information has been shared with ${res.requester.name || 'requester'}`, {root: true});
        await commit("global/setCurrentBottomSheet", "Message", {root: true});
        await commit("global/setShowModal", true, {root: true});
    }
    debugger;
    // debugger;
};


const updateVolunteerStatus = async ({commit,dispatch,state},statusObj)=>{
    const res = await volunteerStatusUpdate(statusObj)
    if(res){
        let str = ''
        if(statusObj.resolved){
            str = 'done! we are proud of you.'
        }else{
            str = 'No worries, we are sure you tried.'
        }
        dispatch('getCards', {filters: {limit: state.cardData.totalDocs}, resetPage: true})
        await commit("global/setMessageText", str, {root: true});
        await commit("global/setCurrentBottomSheet", "Message", {root: true});
        await commit("global/setShowModal", true, {root: true});
    }
}

export default {
    getCards,
    wouldVolunteer,
    updateVolunteerStatus
}
