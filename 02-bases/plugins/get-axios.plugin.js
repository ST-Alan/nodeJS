const axios = require('axios');

// Peticiones - Token de acceso(headers) -
const buildHttpClient = (headers)=>{
    return {
        get: async(url) => {

            const {data} = await axios.get( url, headers )
    
            return data
        },
    
        post: async(url,body) =>{},
        put: async(url, body) => {},
        delete: async(url) => {},
    };
  }

const httpClientPluginAxios = {
    get: async(url) => {
        // const resp = await axios.get( url )
        // De la repsuesta desestructuro la data
        const {data} = await axios.get( url )

        // console.log(data)

        return data
    },

    post: async(url,body) =>{},
    put: async(url, body) => {},
    delete: async(url) => {},
};

module.exports = {
    httpAxios:httpClientPluginAxios,
}
