<template>
    <div class="card-container">
         <div class="top-of-card">
             <p class="poke-id">001</p>
         </div>
        <div class="img-wrapper">
            <img class="poke-img" alt="pokemon image" />
        </div>
    </div>

</template>
<script setup>
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
</style>
