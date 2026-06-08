<template>
    <div class="card-container">
         <div class="top-of-card">
             <p class="poke-id">001</p>
         </div>
        <div class="img-wrapper">
            <img class="poke-img" alt="pokemon image" :src="props.pokemon.sprites.other['official-artwork'].front_default" />
        </div>
        <p class="poke-name">Pokename</p>
        <div class="abilities-wrapper">
            <div class="ability-background">
                 <p class="typeClass">Ability</p>
            </div>
        </div>
        <hr class="horizontal-line">
        <hr class="horizontal-line">
        <div class="stats-section">
            <div class="stat-row">
                <span class="stat-label">HP</span>
                <div class="stat-track">
                    <div class="stat-fill" :style="{ width: (props.pokemon.stats[0].base_stat / 255 * 100) + '%' }"></div>
                </div>
                <span class="stat-value">78</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">ATK</span>
                <div class="stat-track">
                    <div class="stat-fill" :style="{ width: (props.pokemon.stats[1].base_stat / 255 * 100) + '%'}"></div>
                </div>
                <span class="stat-value">84</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">DEF</span>
                <div class="stat-track">
                    <div class="stat-fill" :style="{ width: (props.pokemon.stats[2].base_stat / 255 * 100) + '%'}"></div>
                </div>
                <span class="stat-value">65</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">SPD</span>
                <div class="stat-track">
                    <div class="stat-fill" :style="{ width: (props.pokemon.stats[5].base_stat / 255 * 100) + '%'}"></div>
                </div>
                <span class="stat-value">100</span>
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

const typeClass = computed(() => {
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
    background-color: #2D1B69;
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
    padding-left: 10px;
    margin: 0;

}
.ability-background {

    background-color: #FFCB05;
    margin: 0;
    border-radius: 18px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.ability-background p {
    margin: 0;
}
.stats-section {
    display: flex;
    margin-left: 10px;
}
.stats-row {
    display: flex;
    flex-direction: row;

}
.stat-title {
    color: #ffffff;
}
.type-fire {
    background-color: #FF6B3526;
}
.type-water {
    background-color: #3D9BE926;
}
.type-grass {
    background-color: #4CAF5026;
}
.type-electric {
    background-color: #FFD70026;
}
.type-psychic {
    background-color: #E91E8C26;
}
.type-ghost {
    background-color: #70589826;
}
.type-dragon {
    background-color: #6B4EFF26;
}
.type-dark {
    background-color: #3D3D3D26;
}
.type-fairy {
    background-color: #FF9EC426;
}
.type-normal {
    background-color: #A8A87826;
}
.type-fighting {
    background-color: #C0302826;
}
.type-flying {
    background-color: #A890F026;
}
.type-poison {
    background-color: #A040A026;
}
.type-ground {
    background-color: #E0C06826;
}
.type-rock {
    background-color: #B8A03826;
}
.type-bug {
    background-color: #A8B82026;
}
.type-ice {
    background-color: #7DD8F826;
}
.type-steel {
    background-color: #B8B8D026;
}
.horizontal-line {
    width: 100%;
    border-color: #FFCB05;
}
.stats-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 10px 10px 10px;
}
.stat-row {
    display: flex;
    align-items: center;
    gap: 8px;
}
.stat-label {
    font-size: 9px;
    color: #D3D3D3;
    width: 28px;
    margin: 0;
}
.stat-track {
    flex: 1;
    height: 4px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 2px;
    overflow: hidden;
}
.stat-fill {
    height: 100%;
    border-radius: 2px;
    background-color: #FFCB05;
}
.stat-value {
    font-size: 10px;
    color: #D3D3D3;
    width: 24px;
    text-align: right;
    margin: 0;
}
</style>
