<script setup>
import GiftButton from "@/components/GiftButton.vue";
import {ref} from "vue";
import router from "@/router.js";
let data = [
  { id: 1, opened: false},
  { id: 2, opened: false},
  { id: 3, opened: false},
  { id: 4, opened: false},
  { id: 5, opened: false},
  { id: 6, opened: false},
  { id: 7, opened: false},
  { id: 8, opened: false},
  { id: 9, opened: false},
  { id: 10, opened: false},
  { id: 11, opened: false},
  { id: 12, opened: false},
  { id: 13, opened: false},
  { id: 14, opened: false},
  { id: 15, opened: false},
  { id: 16, opened: false},
  { id: 17, opened: false},
  { id: 18, opened: false},
  { id: 19, opened: false},
  { id: 20, opened: false},
  { id: 21, opened: false},
  { id: 22, opened: false},
  { id: 23, opened: false},
  { id: 24, opened: false}
]
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

shuffle(data);

for (let el of data) {
  if (!localStorage.getItem(el.id)) {
    localStorage.setItem(el.id.toString(), el.opened.toString());
  }
  el.opened = localStorage.getItem(el.id.toString());
}
console.log(data)

function unwrapGift(item) {
  localStorage.setItem(item.id.toString(), "true");
  item.opened = localStorage.getItem(item.id.toString());

}
const gifts = ref(data)
function getDayPart() {
  const currentDate = new Date(); // Get the current date
  return currentDate.getDate();  // Return the day of the month (1-31)
}
function getMonthPart() {
  const currentDate = new Date();
  return currentDate.getMonth() + 1;
}

function goToGallery(item) {
  console.log("I'm doing something!!")
  if (getDayPart().toString() < item.id || getMonthPart().toString() !== "11") {
    console.log("Not this time of the year yet!")
    return;
  }
  console.log(localStorage.getItem(item.id.toString()))
  if (localStorage.getItem(item.id.toString()) === "false") {
    console.log("Unwrapping...")
    unwrapGift(item);
  }
  let number = item.id.toString()
  console.log(number)
  router.push("/guide/"+ number);
}

</script>

<template>
  <h1>
    Adventskalender 2024
  </h1>
  <main class="main">
    <ul>
      <GiftButton
          v-for="item in gifts"
          :gift="item"
          :key="item.id"
          @click="goToGallery(item)"
      ></GiftButton>
    </ul>
  </main>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-template-rows: repeat(6, auto); /* 6 rows */
  gap: 50px; /* Spacing between items */
  padding: 0;
  margin: 0;
  list-style: none; /* Remove bullet points */
}
</style>