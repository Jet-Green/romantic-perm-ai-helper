<script setup lang="ts">
const { $api } = useNuxtApp();

const loading = ref(false)
const response = ref(null)

async function askYAGptLite(prompt: string) {
  loading.value = true
  try {
    const { data, status, error } = await useApiFetch<any>('/flowers/suggest-bouquet/ask-ya-gpt-lite', {
      method: 'POST',
      body: { prompt }
    })

    if (status.value === 'success') {
      response.value = data.value
      console.log(data.value)
    } else {
      console.error(error.value)
    }
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div>
    <v-btn :loading="loading" :disabled="loading"
      @click="askYAGptLite('Кому: девушке, повод: свидание, настроение: нежность, сезон: весна')">
      Запрос
    </v-btn>

    <div v-if="response" class="mt-4 text-body-1 text-pre-wrap">
      {{ response }}
    </div>
  </div>
</template>
<style scoped lang="scss"></style>