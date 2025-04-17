export default defineNuxtRouteMiddleware(async (to, from) => {
  const { checkAuth, user } = useAuth()  // Получаем функцию checkAuth

  const isAuthenticated = await checkAuth()  // Проверяем, аутентифицирован ли пользователь

  // Если не аутентифицирован, перенаправляем на страницу входа
  if (!isAuthenticated) {
    return navigateTo('/login')  // Перенаправление на страницу входа
  }
})