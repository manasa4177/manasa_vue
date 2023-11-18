<script setup>
import Icon from './icons/Icon.vue';
</script>

<template>
  <div class="header-outer-container ocpy">
    <div class="header-inner-container ocpy flx cntr">
        <div class="header ocpy flx cntr row sp-bt">
          <div style="gap: 20px;" class="flx cntr row">
            <Icon style="font-size: inherit;" icon="festival" /> 
            <span class="vrl"></span>Festivals
          </div>
          <Icon style="font-size: inherit;" icon="account_circle" />
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-outer-container{
    box-shadow: 0px 2px 5px rgba(0,0,0,0.3);
    background-color: var(--color-orange);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
.header-inner-container{
  backdrop-filter: blur(1px);
  justify-content: flex-start;
  padding-left: 5%;
  padding-right: 5%;
}
.header{
    color: white;
    font-size: 2.2em;
    font-weight: 600;
    gap: 20px;
}
.vrl{
  background-color: rgba(255, 255, 255, 0.9);
  height: 100%;
  width: 3px;
  height: 40px;
}

@media (max-width: 768px) {
  .header{
    color: white;
    font-size: 1.4em;
  }
}
</style>
