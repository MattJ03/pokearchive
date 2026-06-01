<template>
    <div class="title-wrapper">
    <h1 class="title-header">Pokemon index</h1>
    </div>
    <div class="container">
        <PokeCard></PokeCard>

    </div>
</template>
<script setup>
import { ref, computed, onMounted, reactive } from 'vue';
import PokeCard from "../components/PokeCard.vue";
</script>
<style scoped>
.container {
    display: flex;
    margin: auto;
    border: white solid 1px;
    width: 85%;
    min-height: 80dvh;
    border-radius: 14px;
    padding-left: 30px;
    padding-top: 30px;
}
.title-wrapper {
    display: flex;
    justify-content: center;
}
.title-header {
    color: #FFCB05;

}
</style>
