<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="card">
      <ion-fab horizontal="start">
        <ion-fab-button class="checkmark" @click="increaseWinAndHide">
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
  </transition>
</template>

<script setup lang="ts">
import { IonFabButton, IonIcon, IonContent, alertController } from '@ionic/vue';
import { checkmark, close } from 'ionicons/icons';
import { ref } from 'vue';
import { globalStore } from './globalStore.ts';

const props = defineProps({
  word: String,
});

const isVisible = ref(true);
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
  .fade-enter-active, .fade-leave-active {
    transition: background-color 0.5s; /* Adjust the duration as needed */
  }
  .fade-enter, .fade-leave-to {
    background-color: yellow; /* Initial background color */
  }

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
    --background: transparent;
  }

  ion-icon {
    color: white;
  }

  .checkmark {
    --background: #7fba00;
  } 

  .close {
    --background: rgb(200, 0, 0);
  }
</style>
