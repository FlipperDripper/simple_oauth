import axios from 'axios';
import {getAuthLink} from "../api";
import constants from "../constants";

const state = {
    isAuth: false
};
const actions = {
    async authorize(context){
        try {
            const {data:{redirectUrl}} = await axios.post(getAuthLink(constants.AUTH_SERVICES.VK));
            window.location.href = redirectUrl;
        }catch (e) {
            console.error(e);
        }
    }
};
const mutations = {};
const getters = {};

const store = {
    state,
    actions,
    mutations,
    getters
};
export default store;