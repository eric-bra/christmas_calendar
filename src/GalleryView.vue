<script setup>
import {Gallery} from "vue-preview-imgs";
import {ref} from "vue";
import {onMounted} from "vue";
const props = defineProps({
  id: String
})
let list = ref({})
onMounted(async () => {
  list.value = (await import(/* @vite-ignore */ "./guides/" + props.id + ".json")).default;
})



</script>

<template>
  <nav>
    <RouterLink to="/">Go back </RouterLink>
  </nav>
  <main>
    <h3>Anleitung - {{props.id}}.12.</h3>
    <div class="gallery-container">
      <Gallery :list="list" :config="{immediate: false}" />
    </div>
  </main>
</template>


<style scoped>
.gallery-container {
  padding: 20px 0;
  height: 50px;
}
</style>