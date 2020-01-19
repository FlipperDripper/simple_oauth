<template>
    <div>
        <Button text="Authorize" @click="authorize"/>
    </div>
</template>

<script>
    import Button from "../components/Button";
    export default {
        name: "Auth",
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

<style scoped>

</style>