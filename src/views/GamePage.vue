<template>
  <ion-page>
    <ion-header class="header" :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="header-title">Crocodile Game</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="!globalStore.isStartedGame" class="start-button">
        <ion-button @click="startGame" fill="outline" shape="round">Start the Game</ion-button>
      </div>

      <div v-if="globalStore.isStartedGame" class="cards-list">
        <WordCard :word="randomWords[0]"></WordCard>
        <WordCard :word="randomWords[1]"></WordCard>
        <WordCard :word="randomWords[2]"></WordCard>
        <WordCard :word="randomWords[3]"></WordCard>
        <WordCard :word="randomWords[4]"></WordCard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import WordCard from '../components/WordCard.vue';
import { globalStore } from '../components/globalStore';

const getRandomWords = (splitArray) => {
    const result = [];

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * splitArray.length);
        const randomWord = splitArray[randomIndex][Math.floor(Math.random() * splitArray[randomIndex].length)];
        result.push(randomWord);
    }

    return result;
};

const startGame = () => {
    console.log('Game started!');
    globalStore.isStartedGame = true;

    // Update randomWords with new random words
    randomWords.value = getRandomWords(splitArray.value);
};

const list = ['Солнце Кофе Велосипед Космос Мыло Ковер Карандаш Гитара Океан Зонт Вертолет Шоколад Спутник Фонарь Книга Зеркало Волосы Берег Машина Дом Камень Бабочка Джинсы Часы Гора Бутылка Лестница Ракета Конверт Деньги Собака Шляпа Цветок Кресло Пчела Виолончель Чемодан Молния Вода Глаза Собака Картошка Мост Краска Газета Цветок Парашют Компьютер Джемпер Фотоаппарат Билет Палец Шоколад Цирк Телевизор Скрипка Вода Лестница Машина Космос Ветер Гриб Метро Гриль Очки Палка Стрела Змея Мыло Метла Ключ Скейтборд Снеговик Лампа Палатка Гитара Рыба Колесо Дорога Телефон Радуга Крылья Камера Огонь Колокольчик Сковорода Пингвин Ящик Птица Карта Яблоко Кошка Кольцо Замок Печка Скрипка Печенье Зонт Зебра Мост Гвоздь Шар Лужайка Лук Скейт Смех Спираль Газета Шарф Овца Ковер Скрипка Стол Подушка Змейка Крючок Муравей Стрекоза Телефон Комета Лес Кот Звезда Молния Гроза Паровоз Гора Шапка Папоротник Яблоко Картошка Колесо Ящик Скейт Мост Лампа Шар Печенье Печка Подушка Скрипка Замок Кольцо Яблоко Гитара Ветер Виолончель Деньги Джемпер Зонт Змея Игла Крокодил Космос Кот Крылья Курица Лампа Лестница Лужайка Лук Машина Метла Метро Молоко Мост Мыло Муравей Нос Облако Овца Огонь Огурец Орех Палец Паровоз Пирамида Пляж Поцелуй Радуга Ракета Рука Самолет Свеча Семена Скейт Слон Снеговик Собака Солнце Спираль Стол Стрекоза Стрела Трава Ухо Фонарь Фотоаппарат Хвост Цветок Чайник Часы Чашка Черепаха Чернила Чертеж Шапка Шарф Швабра Шоколад Шляпа Электричество Яблоко Ящик Ящерица Вода Гитара Карандаш Зонт Змея Мыло Волосы Гриб Дерево Деньги Дом Камень Книга Космос Кровать Лестница Лужайка Машина Мыло Нос Облако Огонь Огурец Орех Палец Паровоз Пирамида Пляж Поцелуй Радуга Ракета Рука Самолет Свеча Семена Скейт Слон Снеговик Собака Солнце Спираль Стол Стрекоза Стрела Трава'];

const splitArray = ref([]);
const randomWords = ref([]);

onMounted(() => {
    splitArray.value = list.map(item => item.split(" "));
    randomWords.value = getRandomWords(splitArray.value);
});

const props = defineProps(['IonPage', 'IonHeader', 'IonToolbar', 'IonTitle', 'IonContent', 'IonButton', 'WordCard']);
const emits = defineEmits(['startGame', 'isStartedGame']);

</script>


<style scoped>
.header-title {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: white;
}

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

ion-button {
  height: 50px;
  font-weight: bold;
}

.cards-list {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
