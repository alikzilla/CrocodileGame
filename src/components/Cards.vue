<template>
  <div>
		<GameCardsStack
			:cards="visibleCards"
			@cardAccepted="handleCardAccepted"
			@cardRejected="handleCardRejected"
			@hideCard="removeCardFromDeck"
		/>
  </div>
</template>

<script lang="ts">
import GameCardsStack from './GameCardsStack.vue';
import { globalStore } from './globalStore';
import { alertController, IonContent } from '@ionic/vue';

export default {
  data() {
    return {
      totalCards: 5
    }
  },

  components: {
    GameCardsStack,
    IonContent
  },

  props: {
    visibleCards: {
      type: Array,
      default: null
    }
  },

  methods: {
    handleCardAccepted() {    
      globalStore.wins++;
      console.log("handleCardAccepted " + " guessed: " + globalStore.wins);

      if (globalStore.wins + globalStore.loses === this.totalCards) {
        this.presentAlert();
      }
      
    },
    handleCardRejected() {
      globalStore.loses++;
      console.log("handleCardRejected " + " unguessed: " + globalStore.loses);

      if (globalStore.wins + globalStore.loses === this.totalCards) {
        this.presentAlert();
      }
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    },

    async presentAlert() {
      const alert = await alertController.create({
        header: 'Results',
        message: `Guessed: ${globalStore.wins} and Unguessed: ${globalStore.loses}`,
        buttons: ['Ok'],
      });

      await alert.present();

      globalStore.isStartedGame = false;
      globalStore.wins = 0;
      globalStore.loses = 0;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
