<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        
        <ion-tab-button tab="game" href="/tabs/game">
          <ion-icon aria-hidden="true" :icon="gameControllerOutline" size="large" />
          <ion-label class="tabs_label">Game</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon aria-hidden="true" :icon="cog" size="large" />
          <ion-label class="tabs_label">Settings</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { cog, gameControllerOutline } from 'ionicons/icons';
</script>

<style scoped>
ion-tab-bar {
  height: 10vh;
}

.tabs_label {
  font-weight: bold;
  font-size: 20px;
}
</style>