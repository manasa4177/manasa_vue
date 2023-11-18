<script setup>
import Icon from './icons/Icon.vue';
defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="festival-outer-container">
        <div class="festival-inner-container ocpy">
            <div class="festival ocpy flx col">
                <div class="festival-heading flx sp-bt">{{ data.Name }}</div>
                <div class="festival-row flx row sp-bt"><Icon icon="flag"/><span>{{ data.Country }}</span></div>
                <div class="festival-row flx row sp-bt"><Icon icon="description"/><span>{{ data.Description }}</span></div>
                <div class="festival-row flx row sp-bt"><Icon icon="schedule"/><span>{{ data.Date }}</span></div>
                <div class="festival-row flx row sp-bt"><Icon icon="restaurant"/><span>{{ data.Associated_Food.join(',') }}</span></div>
                <div class="festival-row flx row sp-bt"><Icon icon="event"/><span>{{ data.Traditions }}</span></div>
                <div class="festival-row flx row sp-bt"><Icon icon="tour"/><span>{{ data.Tourist_Attraction }}</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.festival-outer-container{
    width: 100%;
    height: auto;
}

.festival-inner-container{
    border-radius: 15px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.festival{
    border-radius: inherit;
    padding: 15px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        transition: 0.4s;
        background-color: var(--color-orange);
        color: white;
        .festival-heading{
            color: white;
        }
    }
}
.festival-heading{
    font-size: 1.8em;
    border-bottom: 1px solid;
    margin-bottom: 5px;
    padding: 5px;
    color: var(--color-orange);
}
.festival-row{
    margin-top: 5px;
    span{
        text-align: end;
    }
}
@media (max-width: 768px) {
    .festival{
        font-size: 0.9em;
    }
}
</style>