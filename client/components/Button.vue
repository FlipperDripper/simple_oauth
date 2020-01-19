<template>
    <button @click="click">
        {{text}}
    </button>
</template>

<script>
    export default {
        props:{
            text: String
        },
        name: "Button",
        methods:{
            click(){
                this.$emit('click')
            }
        }
    }
</script>

<style scoped>

</style>