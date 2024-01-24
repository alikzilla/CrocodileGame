<template>
  <div class="gameComponent">
    <ion-progress-bar :value="progress" :reversed="true"></ion-progress-bar>

		<GameCardsStack
			:cards="visibleCards"
			@cardAccepted="handleCardAccepted"
			@cardRejected="handleCardRejected"
			@hideCard="removeCardFromDeck"
		/>
    <div class="info-card">
      <h1>Swipe left to <span class="false">FALSE</span></h1>
      <h1>Swipe right to <span class="true">TRUE</span></h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import GameCardsStack from './GameCardsStack.vue';
import { globalStore } from './globalStore';
import { alertController, IonProgressBar } from '@ionic/vue';

const totalCards = ref(5);

const handleCardAccepted = () => {
  globalStore.wins++;
  console.log("handleCardAccepted " + " guessed: " + globalStore.wins);

  if (globalStore.wins + globalStore.loses === totalCards.value) {
    presentAlert();
  }
};

const handleCardRejected = () => {
  globalStore.loses++;
  console.log("handleCardRejected " + " unguessed: " + globalStore.loses);

  if (globalStore.wins + globalStore.loses === totalCards.value) {
    presentAlert();
  }
};

const removeCardFromDeck = () => {
  props.visibleCards.shift();
};

const presentAlert = async () => {
  const alert = await alertController.create({
    header: 'Results',
    message: `Guessed: ${globalStore.wins} and Unguessed: ${globalStore.loses}`,
    buttons: ['Ok'],
  });

  clearInterval(timer);
  await alert.present();

  globalStore.isStartedGame = false;
  globalStore.wins = 0;
  globalStore.loses = 0;
};

const presentTimeAlert = async () => {
  const alert = await alertController.create({
    header: 'Time is up',
    message: `Guessed: ${globalStore.wins} and Unguessed: ${globalStore.loses}`,
    buttons: ['Ok'],
  });

  await alert.present();

  globalStore.isStartedGame = false;
  globalStore.wins = 0;
  globalStore.loses = 0;
};

const props = defineProps(['visibleCards']);

let progress = ref(0);


const timer = setInterval(() => {
  progress.value += 0.01;

  if (progress.value > 1) {
    presentTimeAlert();
    clearInterval(timer);
  }
}, 50);


onMounted(() => {
  timer;
});
</script>

<style lang="scss">
@import "../styles/mixins.scss";

.gameComponent {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ion-progress-bar {
  --background: green;
  --progress-background: rgb(108, 239, 108);
  height: 10px;
  border-radius: 10p;
}

.info-card {
  border-top: 0.5px rgb(235, 235, 235) solid;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.info-card h1 {
  font-size: 30px;
}

.false {
  color: red;
  font-weight: bold;
}

.true {
  color: rgb(0, 193, 0);
  font-weight: bold;
}
</style>
