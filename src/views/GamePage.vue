<template>
  <ion-page>
    <ion-header class="header" :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="header-title">Crocodile Game</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="!globalStore.isStartedGame" class="start-button">
        <ion-button @click="startGame" fill="outline" shape="round">Start the Game</ion-button>
      </div>

      <div v-if="globalStore.isStartedGame" class="cards-list">
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
import { ref, defineProps, defineEmits } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import WordCard from '../components/WordCard.vue';
import { globalStore } from '../components/globalStore';

const startGame = () => {
  console.log('Game started!');
  globalStore.isStartedGame = true;
};

const isStartedGame = ref(globalStore.isStartedGame);

const props = defineProps(['IonPage', 'IonHeader', 'IonToolbar', 'IonTitle', 'IonContent', 'IonButton', 'WordCard']);
const emits = defineEmits(['startGame', 'isStartedGame']);

</script>


<style scoped>
.header-title {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: white;
}

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

ion-button {
  height: 50px;
  font-weight: bold;
}

.cards-list {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
