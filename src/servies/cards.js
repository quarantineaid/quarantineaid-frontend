import axios from 'axios';
import {BASE_URL} from "./constants";


export const fetchAllCards = async (urlFrag,filters={},query={})=>{
    const params = {...query,...filters}
    debugger;
    const res = await axios.get(`${BASE_URL}${urlFrag||'occurrences/all'}`,{params:{...params}});
    if(res.statusText.toLowerCase()==="ok"){
        return  res.data
    }else{
        return  null;
    }

};


export  const  doVolunteer = async (situationId)=>{
    const res = await axios.post(`${BASE_URL}situations/helping/volunteer`,{situationId});
    if(res.statusText.toLowerCase() ==="ok"){
            return  res.data;
    }else{
        return  false;
    }
    // debugger;
}


export  const volunteerStatusUpdate = async (statusObj={})=>{
    const res = await axios.post(`${BASE_URL}situations/helping/status`,{...statusObj});
    if(res.statusText.toLowerCase()==='ok'){
        return  true;
    }else{
        return  false;
    }
}