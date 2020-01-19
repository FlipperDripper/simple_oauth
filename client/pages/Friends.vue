<template>
    <div>
        <div class="friends">
            <div class="friends__container" >
                <div class="friends__list" v-if="friends">
                    <div 
                        class="friends__item" 
                        v-for="friend in friends" 
                        :key="friend.id">
                            <Friend 
                                :firstName="friend.first_name" 
                                :photoSrc="friend.photo_100"
                                :lastName="friend.last_name"
                                :isOnline="friend.online == 1"    
                            />
                    </div>
                </div>
            </div>
        </div>
        <Button @click="logout" text="Logout"/>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Friend from '../components/Friend';
    import Button from '../components/Button';

    export default {
        name: "Friends",
        components:{
            Friend,
            Button
        },
        computed:mapState(['friends', 'friendsTotal']),
        created(){
            this.$store.dispatch('getFriends', {count: 5});
        },
        methods:{
            ...mapActions(['logout'])
        }
    }
</script>

<style scoped>
    .friends{
        padding-top: 20px;
        background-color: #4A76A7;
        border-radius: 10px;
    }
    .friends__container{
        background-color: white;
        padding: 10px 5px;
        border: 1px solid #e7e8ec;
    }
    .friends__item{
        padding: 20px;
        border-top: solid 1px #e7e8ec;
    }
    .friends__item:first-child{
        border-top: none;
    }
</style>