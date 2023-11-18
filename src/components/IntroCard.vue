<script setup>
import intro from '../assets/intro.json'
</script>

<template>
    <div class="intro-outer-container ocpy">
        <div class="intro-inner-container ocpy">
            <div class="intro ocpy">
                <div class="intro-lottie ocpy lottie-container">
                    <Lottie class="lottie-item" :animationData="intro" />
                </div>
                <div class="intro-text ocpy flx cntr">
                    Welcome to Manasa's Vue App
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
.intro-outer-container{
    padding: 15px;
}
.intro-inner-container{
    box-shadow: -5px -20px 35px rgba(0,0,0,0.2) inset;
    border-radius: 15px;
    background: rgb(71, 136, 233);
}
.intro{
    display: grid;
    grid-template-columns: 35% 65%;
    .intro-text{
        color: white;
        font-size: 2.2em;
        font-weight: 300;
    }
}

@media (max-width: 768px) {
    .intro{
        // grid-template-columns: 100%;
        // grid-template-rows: 60% 40%;
        .intro-text{
            font-size: 1.1em;
        }
    }
}
</style>
  