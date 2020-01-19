import axios from 'axios';
import {getAuthLink, getFriends, logout} from "../api";
import constants from "../constants";

const state = {
    friends: null,
    friendsTotal: null
};
const actions = {
    async authorize(context){
        try {
            const {data:{redirectUrl}} = await axios.post(getAuthLink(constants.AUTH_SERVICES.VK));
            window.location.href = redirectUrl;
        }catch (e) {
            console.error(e);
        }
    },
    async getFriends(context, payload){
        try{
            const {data:{items, count}} = await axios.get(getFriends(payload.count));
            context.commit('saveFriends', {items, total: count})    
        }catch(e){
            console.error(e);
        }
    },
    async logout(){
        try{
            await axios.post(logout());
            window.location.reload();

        }catch(e){
            console.error(e);
        }
    }
};
const mutations = {
    saveFriends(state, {items, total}){
        state.friends = items;
        state.friendsTotal = total;
    }
};
const getters = {};

const store = {
    state,
    actions,
    mutations,
    getters
};
export default store;