import type { UseFetchOptions } from 'nuxt/app';

export function useApiFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const headers = useRequestHeaders(['cookie']);

  return useFetch(url, {
    ...options,
    headers,
    $fetch: useNuxtApp().$apiFetch,
  });
}