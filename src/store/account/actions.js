import {checkOTP, facebookAuth, getOTP, googleAuth} from "../../servies/auth";

const signInFb = async ({ dispatch, commit },{token})=>{
    const res = await facebookAuth(token);
    if(res.statusText.toLowerCase()==="ok"){
        commit("updateUserObject",{info:res.data});
    }
};

const signInGl = async ({ dispatch, commit },{token})=>{
    const res = await googleAuth(token);
    if(res.statusText.toLowerCase()==="ok"){
        commit("updateUserObject",{info:res.data});
    }
};


const verifyPhone = async ({ dispatch, commit },{phone})=>{
    const res = await getOTP(`+91${phone}`);
    if(res){
        commit('updateOTPSent',true)
    }else{
        commit('updateOTPSent',false)
    }
};

const verifyOTP = async ({ commit,state },otp)=>{
    const res = await checkOTP(otp);
    debugger;
     if(res&&res.verfied){
        const {info} = state.user;
         info.user = {
             ...info.user,
             phoneVerify:{
                    ...res,
                 verified:res.verfied
             },
             phone:res.phone
         };
         localStorage.removeItem("usr");
         commit("updateUserObject",{info});
     }else{
         commit('updateOTPSent',false)
     }
};


export default {
    signInFb,
    signInGl,
    verifyPhone,
    verifyOTP
}