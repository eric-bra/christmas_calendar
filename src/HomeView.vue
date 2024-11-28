<script setup>
import GiftButton from "@/components/GiftButton.vue";
import {ref} from "vue";
import router from "@/router.js";
let data = [
  { id: 1, value: false},
  { id: 2, value: false},
  { id: 3, value: false},
  { id: 4, value: false},
  { id: 5, value: false},
  { id: 6, value: false},
  { id: 7, value: false},
  { id: 8, value: false},
  { id: 9, value: false},
  { id: 10, value: false},
  { id: 11, value: false},
  { id: 12, value: false},
  { id: 13, value: false},
  { id: 14, value: false},
  { id: 15, value: false},
  { id: 16, value: false},
  { id: 17, value: false},
  { id: 18, value: false},
  { id: 19, value: false},
  { id: 20, value: false},
  { id: 21, value: false},
  { id: 22, value: false},
  { id: 23, value: false},
  { id: 24, value: false},
  { id: 29, value: false}
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
    localStorage.setItem(el.id.toString(), el.value.toString());
  }
}
for (let el of data) {
  el.value = localStorage.getItem(el.id.toString());
}
console.log(data)

function unwrapGift(item) {
  localStorage.setItem(item.id.toString(), "true");
  item.value = localStorage.getItem(item.id.toString());

}
console.log(data)
const gifts = ref(data)
function getDayPart() {
  const currentDate = new Date(); // Get the current date
  return currentDate.getDate();  // Return the day of the month (1-31)
}

function goToGallery(item) {
  console.log("I'm doing something!!")
  if (getDayPart().toString() < item.id) {
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
  <ul>
    <GiftButton
        v-for="item in gifts"
        :gift="item"
        :key="item.id"
        @click="goToGallery(item)"
    ></GiftButton>
  </ul>
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