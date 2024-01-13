import { reactive } from 'vue';

export const globalStore = reactive({
  wins: 0,
  loses: 0,
  isStartedGame: false,
});
