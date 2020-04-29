export default {
    updateUserObject:(state,tokenObj)=>{
        debugger;
        if(tokenObj){
            if(!localStorage.getItem("usr")){
                localStorage.setItem("usr",JSON.stringify(tokenObj.info));
                state.user = Object.assign({},{...tokenObj});
            }else{
                state.user = Object.assign({},{...tokenObj});
            }
        }else{
            state.user = null;
        }

    },
    updateOTPSent(state,status){
        debugger;
        state.OTPSent = status
    }
}