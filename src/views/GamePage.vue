<template>
  <ion-page>
    <ion-header class="header" :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="header-title">Crocodile Game</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="cards-list">
        <WordCard word="word 1"></WordCard>
        <WordCard word="word 2"></WordCard>
        <WordCard word="word 3"></WordCard>
        <WordCard word="word 4"></WordCard>
        <WordCard word="word 5"></WordCard>
      </div>
    </ion-content>
  
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import WordCard from '../components/WordCard.vue';
</script>

<style scoped>
.header-title {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: white;
}

.cards-list{
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>