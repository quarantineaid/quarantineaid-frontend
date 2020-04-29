import axios from 'axios';
import {BASE_URL} from "./constants";

export const facebookAuth = async (token)=>{
       return  await axios.post(`${BASE_URL}auth/facebook`, null, {
              headers: {
                     "Authorization": `Bearer ${token}`
              }
       });
};

export const googleAuth = async (token)=>{
       // debugger;
       const response = await axios.post(`${BASE_URL}auth/google`, null, {
              headers: {
                     "Authorization": `Bearer ${token}`
              }
       });
       // debugger;
       return response;
};


export const getOTP = async (phone)=>{
       const response = await axios.get(`${BASE_URL}users/verify/${phone}`);
       if(response.statusText.toLowerCase()==='created'){
              return  true;
       }

       return  null;
};

export const checkOTP = async (otp)=>{
       const response = await axios.post(`${BASE_URL}users/verify-otp`,{...otp});
       debugger;
       if(response.statusText.toLowerCase()==='ok'&&response.data.verfied){
              return  response.data;
       }

       return  null;
}