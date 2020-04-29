export default {
    isHelping(state){
        return state.currentLayout === "helping"&&state.currentTabIndex ===0;
    },
    getMessage(state){
        return state.messageText
    }
}