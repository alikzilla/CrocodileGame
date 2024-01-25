<template>
  <div class="timer-control">
    <h1>Time:</h1>
    <ion-radio-group v-model="valueTime" @ion-change="handleChange" value="150">
      <div class="radio-button">
        <h1 class="text">15s</h1>
        <ion-radio value="150"></ion-radio>
      </div>
              
      <div class="radio-button">
        <h1 class="text">30s</h1>
        <ion-radio value="300"></ion-radio>
      </div>

      <div class="radio-button">
        <h1 class="text">60s</h1>
        <ion-radio value="600"></ion-radio>
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

let valueTime = ref();

const handleChange = () => {
  globalStore.timer = valueTime.value;
  console.log('Current value:', valueTime.value);
};
</script>

<style scoped>
.timer-control {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

ion-radio-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
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