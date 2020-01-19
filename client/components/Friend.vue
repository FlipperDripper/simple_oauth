<template>
    <div class="friend">
        <img :src="photoSrc" alt="user avatar" class="friend__photo">
        <div class="friend__name">{{firstName}} {{lastName}}</div>
        <div :class="['friend__online', {'friend__online_true': isOnline}]"></div>
    </div>
</template>

<script>
export default {
    props:{
        firstName: String,
        lastName: String,
        isOnline: Boolean,
        photoSrc: String,
    }
}
</script>

<style>
    .friend{
        display: flex;
        align-items: center;
        color: #2a5885;
        font-weight: bold;
    }
    .friend__name{
        margin-right: auto;
    }

    .friend__photo{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
    }
    .friend__online{
        width: 10px;
        height: 10px;
        background-color: gray;
        border-radius: 50%;
        margin-right: 15px;
    }
    .friend__online_true{
        background-color: green;
    }
</style>