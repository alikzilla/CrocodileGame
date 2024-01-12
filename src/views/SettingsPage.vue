<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="header-title">Settings</ion-title>
      </ion-toolbar>
    </ion-header>

  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
</script>

<style scoped>
.header-title {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: white;
}
</style>
