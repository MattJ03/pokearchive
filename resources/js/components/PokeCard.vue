<template>
    <div class="card-container">
         <div class="top-of-card">
             <p class="poke-id">001</p>
         </div>
        <div class="img-wrapper">
            <img class="poke-img" alt="pokemon image" />
        </div>
        <p class="poke-name">Pokename</p>
        <div class="abilities-wrapper">
            <div class="ability-background">
                 <p>Ability</p>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, reactive, computed } from 'vue';

const props = defineProps({
    pokemon: {
        type: Object,
        required: true,
    },
});

const actionClass = computed(() => {
    switch (props.pokemon.types[0].type.name) {
        case 'fire':     return 'type-fire';
        case 'water':    return 'type-water';
        case 'grass':    return 'type-grass';
        case 'electric': return 'type-electric';
        case 'psychic':  return 'type-psychic';
        case 'ghost':    return 'type-ghost';
        case 'normal':   return 'type-normal';
        default:         return 'type-normal';
    }
        });
</script>
<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    border: 1px solid #ffffff;
    height: 40dvh;
    width: 17%;
    border-radius: 14px;
}
.top-of-card {
    display: flex;
    flex-direction: row;
     padding-top: 10px;
}
.poke-id {
    color: #D3D3D3;
    padding-left: 10px;
}
.img-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    width: 80%;
    height: 35%;
    background-color: #F45156;
    border-radius: 14px;
    opacity: 40%;
}
.poke-img {

}
.poke-name {
    font-size: 20px;
    color: #ffffff;
    padding-left: 10px;
}
.abilities-wrapper {
    display: flex;
    flex-direction: row;
}
.ability-background {
    height: 100%;
    background-color: #FFCB05;
}
</style>
