<template>
    <router-view></router-view>
</template>

<script>
    import Button from "./components/Button";
    export default {
        name: 'App',
        components:{
            Button
        },
        methods:{
            authorize(){
                this.$store.dispatch('authorize')
            }
        }
    }
</script>

<style>

</style>