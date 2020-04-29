// import Fuss from 'fuss';

export  const getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

export const getTabConfig = ()=>{
    return {
        helping:{
            tabs:[
                {
                    id:"requests",
                    name:"all cases",
                    params:{},
                },
                {
                    id:"in_progress",
                    name:"on going help",
                    params: {}
                },
                {
                    id:"pending",
                    name:"pending help",
                    params: {}
                },
                {
                    id:"helped",
                    name:"helped",
                    params: {}
                }

            ],
            defaultTab:'requests'
        },
        getting_help:{
            tabs:[
                {
                    id:"my_requests",
                    name:"ongoing help",
                    params:{}
                },
                {
                    id:"in_progress",
                    name:"pending help",
                    params: {}
                },
                {
                    id:"resolved",
                    name:"resolved",
                    params: {}
                }

            ],
            defaultTab:'my_requests'
        }
    }
}

/*
const tabConfig = [
    {
        title:""
    }
]
*/


export const uriEncodeObject = (obj)=>{
    const formData = Object.keys(obj).reduce((acc, key) => {
        const value = obj[key]

        return acc + '&' + encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }, '');

    return formData.substring(1)
}