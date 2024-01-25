<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="header-title">Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="settings-wrapper">
        <div class="settings-control-block">
          <TimerControl></TimerControl>
          <CardCountControl></CardCountControl>
          <div class="toggles">
            <ion-toggle>Sound:</ion-toggle>
            <ion-toggle>Music:</ion-toggle>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import TimerControl from '@/components/TimerControl.vue';
import CardCountControl from '@/components/CardCountControl.vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToggle
} from '@ionic/vue';
</script>

<style scoped>
ion-header,
ion-toolbar,
ion-title {
  height: 10vh;
}
.header-title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: white;
}

.settings-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(80vh - 1px);
}

.settings-control-block {
  width: 300px;
  height: 400px;
  background-color: rgb(233, 233, 233);
  border-radius: 15px;
  border: 1px rgb(195, 195, 195) solid;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
}

.toggles {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 30px;
}

ion-toggle {
  --handle-width: 30px;
  --handle-height: 30px;

  --handle-max-height: auto;
  --handle-spacing: -1px;

  --handle-box-shadow: none;
}

ion-toggle::part(track) {
  height: 30px;
  width: 50px;

  /* Required for iOS handle to overflow the height of the track */
  overflow: visible;
}
</style>