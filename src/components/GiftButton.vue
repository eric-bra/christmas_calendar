<script setup>
import {reactive, ref} from "vue";

const props = defineProps({
  gift: Object
})
let gift = props.gift;
console.log(gift)
const iconArray = ["fa-solid", "gift"]
const icon = ref(iconArray);
let color = "#000000"
const iconOptionsArray = ["heart", "mug-hot", "cookie-bite", "snowman", "sleigh", "candy-cane"]
const colorArray = ["#FFCCCC", "#D2691E", "#D2B48C"]
if (gift.opened === "true") {
  icon.value[1] = iconOptionsArray[Math.floor(Math.random() * iconOptionsArray.length)];
  color = colorArray[Math.floor(Math.random() * colorArray.length)];
}
const styleObject = reactive({
  color: color,
  fontSize: '30px'
})
</script>

<template>

  <li>
    {{ gift.id }}.
    <span :style="styleObject">
      <font-awesome-icon :icon=icon :size="'xl'"/>
    </span>
  </li>
</template>

<style scoped>
</style>