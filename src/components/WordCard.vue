<template>
  <div v-if="isVisible" class="card">
    <ion-fab horizontal="start">
      <ion-fab-button @click="increaseWinAndHide">
        <ion-icon aria-hidden="true" :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-content>
      <h1>{{ word }}</h1>
    </ion-content>
    <ion-fab horizontal="end">
      <ion-fab-button class="close" @click="increaseLoseAndHide">
        <ion-icon aria-hidden="true" :icon="close"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</template>

<script setup lang="ts">
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonContent,
  alertController,
} from '@ionic/vue';
import { checkmark, close } from 'ionicons/icons';
import { ref } from 'vue';
import { globalStore } from './globalStore';

const props = defineProps({
  word: String,
});

const isVisible = ref(true);
const isOpen = ref(false);

const increaseWinAndHide = () => {
  globalStore.wins++;
  console.log('Guessed:', globalStore.wins);
  isVisible.value = false;

  if (globalStore.wins + globalStore.loses === totalCards) {
    presentAlert();
  }
};

const increaseLoseAndHide = () => {
  globalStore.loses++;
  console.log('Unguessed:', globalStore.loses);
  isVisible.value = false;

  if (globalStore.wins + globalStore.loses === totalCards) {
    presentAlert();
  }
};

const presentAlert = async () => {
  const alert = await alertController.create({
    header: 'Results',
    message: `Guessed: ${globalStore.wins} and Unguessed: ${globalStore.loses}`,
    buttons: ['Ok'],
  });

  await alert.present();

  globalStore.isStartedGame = false;
  globalStore.wins = 0;
  globalStore.loses = 0;
};

const totalCards = 5;

</script>

<style scoped>
  .card {
    position: relative;
    padding: 0 50px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: green solid 1px;
    border-radius: 60px;
  }

  ion-content {
    text-align: center;
  }

  ion-icon {
    color: white;
  }

  .close {
    --background: rgb(200, 0, 0);
  }
</style>
