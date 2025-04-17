import FlowerApi from "~/api/FlowerApi";
import AuthApi from "~/api/AuthApi";

const apiService = {
  ...FlowerApi,
  auth: {
    ...AuthApi,
  }
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: apiService // Injecting as $api
    }
  };
});

// --- Type Augmentation (in e.g., types/nuxt-plugins.d.ts) ---
declare module '#app' {
  interface NuxtApp {
    $api: typeof apiService;
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof apiService;
  }
}