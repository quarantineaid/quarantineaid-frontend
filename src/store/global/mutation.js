export default {
    setCurrentLayout:(state,layout)=>{
        state.currentLayout = layout;
        state.currentTabIndex = 0;
        state.currentUrl = 'situations/helping/all';
    },
    setCurrentTabIndex:(state,index)=>{
        state.currentTabIndex = index;
    },
    setCurrentDetailComponent:(state,tabId)=>{
        switch (tabId) {
            case "requests":
                state.currentDetailComponent ="VolunteerButton";
                state.currentUrl = 'situations/helping/all';
                break;
            case "in_progress":
                if (state.currentLayout === "helping") {
                    state.currentDetailComponent = "VolunteerOngoing";
                    state.currentUrl = 'situations/helping/ongoing'
                } else {
                    state.currentDetailComponent = "MyRequestProgress";
                    state.currentUrl = "situations/getting-help/pending"
                }
                break;

            case "pending":
                state.currentDetailComponent = "VolunteerPending";
                state.currentUrl ='situations/helping/pending';
                break;
            case "helped":
                state.currentDetailComponent = "VolunteerHelped";
                state.currentUrl = "situations/helping/helped";
                break;
            case "my_requests":
                state.currentDetailComponent = "MyRequests";
                state.currentUrl = "situations/getting-help/ongoing"
                break;
            case "resolved":
                state.currentDetailComponent = "MyRequestResolved";
                state.currentUrl = "situations/getting-help/resolved";
                debugger;
                break;
        }
    },
    setCurrentBottomSheet(state,compName){
        debugger;
        state.currentBottomSheet = compName;
    },
    setShowModal(state,val){
        state.showModal = val;
    },
    setShowMap(state,val){
        state.showMap = val
    },
    setCurrentUrl(state,val){
        state.currentUrl = val
    },
    setMessageText(state,str){
        state.messageText= str;
    }
}