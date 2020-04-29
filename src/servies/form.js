import axios from 'axios';
import {BASE_URL} from './constants';
import {uriEncodeObject} from "../utils";


export const ajaxFindArea = async (query)=>{
    if(query){
        const response = await axios(`https://photon.komoot.de/api/?q=${query}&limit=10`);
        // debugger;
        if(response){
            // console.log(response.data.features);
            return  response.data.features.reduce((acc,cityData)=>{
                acc.push({
                    data:cityData,
                    name:`${cityData.properties.name}, ${cityData.properties.city}`,
                    city:cityData.properties.city
                });
                return acc;
            },[])
        }
    }
};

export const latLngReverse = async (lat,lng)=>{
    const response = await axios(`https://photon.komoot.de/reverse?lon=${lng}&lat=${lat}`);
    if(response){
        const [city] = response.data.features.reduce((acc,cityData)=>{
            acc.push({
                data:cityData,
                name:cityData.properties.name||cityData.properties.street,
                city:cityData.properties.city
            });
            return acc;
        },[])

        return  city;
    }
    return  [];

}


export const makeNewFormRequest = async (payload)=>{
    const response = await axios.post(`${BASE_URL}situations/new`,payload,{
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    if(response.status===200||response.status===201){
        return  response.data
    }else{
        return  null;
    }
};