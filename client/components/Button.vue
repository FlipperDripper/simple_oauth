<template>
    <button @click="click" class="button">
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
    .button{
        background-color: #5181b8;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 10px 15px;
        font-weight: bold;
    }
</style>