<script setup>
import Header from './Header.vue';
import IntroCard from './IntroCard.vue';
import Festival from './Festival.vue';
import { ref } from 'vue'

const countriesData = ref(null);
const loading = ref({ value: true });

fetch(process.env.API_URL)
  .then(response => response.json())
  .then(data => {
    countriesData.value = data
    loading.value = false
    console.log(countriesData.value)
  });
</script>

<template>
    <div class="dashboard-outer-container ocpy">
        <div class="dashboard-inner-container ocpy">
            <Header />
            <div class="dashboard ocpy">
                <IntroCard />
                <div class="festivals-container ocpy rel">
                    <div class="festivals ocpy abs flx col">
                        <div v-if="loading" class="ocpy flx cntr">
                            <div class="loader"></div>
                        </div>
                        <div class="festival-container" v-if="!loading" v-for="data in countriesData">
                            <Festival :data="data" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
.dashboard-inner-container{
    display: grid;
    grid-template-rows: 80px 1fr;
}
.dashboard{
    overflow-x: hidden;
    overflow-y: scroll;
    display: grid;
    grid-template-rows: 20% 80%;
}
.festivals{
    padding: 15px;
    gap: 15px;
    overflow-x: hidden;
    overflow-y: auto;
}

@media (max-width: 768px) {
    .dashboard{
        display: grid;
        grid-template-rows: 20% 80%;
    }
}
</style>
  