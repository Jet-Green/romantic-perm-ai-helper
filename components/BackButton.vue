<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

const props = defineProps({
  buttonText: {
    type: String,
    required: false
  },
  toRoute: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    required: false,
  }
})

const { buttonText, toRoute, disabled } = toRefs(props)

function goTo() {
  if (disabled.value) return;

  if (!toRoute?.value) {
    router.back()
  } else {
    router.push(toRoute.value)
  }
}
</script>

<template>
  <div class="d-flex pt-1 pr-1 pb-1 flex-row flex-nowrap align-center justify-start">
    <div class="d-flex cursor-pointer ma-2" @click="goTo">
      <v-icon>mdi-chevron-left</v-icon>

      <div class="text-body-4 ml-1 font-semibold">{{ buttonText ? buttonText : "Вернуться назад" }}</div>
    </div>
  </div>
</template>
