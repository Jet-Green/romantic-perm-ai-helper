import { toast } from 'vue3-toastify';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const $apiFetch = $fetch.create({
    baseURL: config.public.apiBase,
    credentials: 'include',
    onRequest({ request, options, error }) {
      // Логика обработки запроса
    },
    onResponse({ response }) {

    },

    onResponseError({ response }) {
      console.error(`[onResponseError] Status: ${response.status}, Client: ${process.client}`); // Log status and environment
      console.error('[onResponseError] Data:', JSON.stringify(response._data)); // Log the actual data

      // Adjust this check based on your actual error structure
      if (response?._data?.message) {
        if (process.client) {
          console.log('[onResponseError] Showing toast for:', response._data.message);
          toast(response._data.message || "Ошибка", { type: 'error', autoClose: 1000 });
        } else {
          console.log('[onResponseError] Skipping toast on server.');
        }
      }
      if (response.status === 401) {
        useState('authRedirect').value = useRoute().path;
        navigateTo('/login');
      }
    },
    // onResponseError({ response }) {
    //   if (response._data.message) {
    //     if (process.client)
    //       toast(response._data?.message || "Ошибка", { type: 'error', autoClose: 1000 });
    //   }

    // },
  });

  return {
    provide: {
      apiFetch: $apiFetch,
    },
  };
});