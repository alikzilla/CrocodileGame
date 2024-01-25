<template>
  <div class="timer-control">
    <h1>Card Count:</h1>
    <ion-radio-group v-model="cardCount" @ion-change="handleChange" value="5">
      <div class="radio-button">
        <h1 class="text">3</h1>
        <ion-radio value="3"></ion-radio>
      </div>
              
      <div class="radio-button">
        <h1 class="text">5</h1>
        <ion-radio value="5"></ion-radio>
      </div>

      <div class="radio-button">
        <h1 class="text">7</h1>
        <ion-radio value="7"></ion-radio>
      </div>
    </ion-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { globalStore } from '@/components/globalStore';
import {
  IonRadio,
  IonRadioGroup,
} from '@ionic/vue';

let cardCount = ref();

const handleChange = () => {
  globalStore.cardCount = cardCount.value;
  console.log('Current value:', cardCount.value);
};
</script>

<style scoped>
.timer-control {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ion-radio-group {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.radio-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  margin: 0;
}

ion-radio::part(container) {
    width: 35px;
    height: 35px;

    border-radius: 8px;
    border: 2px solid #ddd;
  }

  ion-radio::part(mark) {
    background: none;
    transition: none;
    transform: none;
    border-radius: 0;
  }

  ion-radio.radio-checked::part(container) {
    background: green;
    border-color: transparent;
  }

  ion-radio.radio-checked::part(mark) {
    width: 6px;
    height: 15px;

    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #fff;

    transform: rotate(45deg);
  }
</style>