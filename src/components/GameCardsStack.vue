<template>
  <div class="cards">
    <GameCard
      v-for="(card, index) in cards"
      :key="(card as number)"
      :card="(card as string)"
      :is-current="index === 0"
      @cardAccepted="$emit('cardAccepted');"
      @cardRejected="$emit('cardRejected');"
      @hideCard="$emit('hideCard');"
    />
  </div>
</template>

<script lang="ts">
import GameCard from './GameCard.vue';

export default {
  components: {
    GameCard
  },

  props: {
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.cards {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
}
</style>
