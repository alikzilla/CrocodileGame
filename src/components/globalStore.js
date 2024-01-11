import { reactive } from 'vue';

const globalStore = reactive({
  wins: 0,
  loses: 0,
});

export { globalStore };