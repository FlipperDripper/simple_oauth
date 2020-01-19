const config = require('../config.js');

class VkApiConstructor {
    constructor(){
        this.vk = config.vk;
        this.url = this.vk.api.url;
    }
    /**
     * Create url for api query to vk api
     * @param {string} method - name of method from config.vk.api 
     * @param {object} params - params for certain method
     * @returns {string}
     */
    getUrl(method, params){
        let resultUrl = `${this.url}/${method}?`;
        Object.keys(params).map(paramName=>{
            resultUrl+=`&${paramName}=${params[paramName]}`
        });
        resultUrl+=`&v=${this.vk.api.version}`;
        return resultUrl;
    } 
}
module.exports = VkApiConstructor;