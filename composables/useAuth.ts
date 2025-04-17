import { useRouter } from '#app'
import { computed } from 'vue'
import type { User } from "../types/user.interface"

export const useAuth = () => {
  const router = useRouter()
  const user = useState<User | null>('user', () => null)
  const isAuthenticated = computed(() => {
    if (user.value?._id) return true
    return false
  })

  async function registration(data: any): Promise<boolean> {
    try {
      const { $api } = useNuxtApp()
      const response = await $api.auth.registration(data)

      console.log(response);

      if (!response?.user) return false

      user.value = response.user
      return true
    } catch (error) {
      console.error('Registration error:', error)
      return false
    }
  }

  async function login(email: string, password: string): Promise<boolean> {
    try {
      const { $api } = useNuxtApp()
      const response = await $api.auth.login(email, password)

      if (response.user) {
        user.value = response.user
        return true
      }
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  async function checkAuth(): Promise<boolean> {
    try {
      if (isAuthenticated.value) return true

      const { $api } = useNuxtApp()
      const response = await $api.auth.refresh()

      if (response.status.value == "success") {
        user.value = response.data.value
        return true
      }
      return false
    } catch (error) {
      console.error('Check auth error:', error)
      await logout()
      return false
    }
  }

  async function logout(): Promise<void> {
    try {
      const { $api } = useNuxtApp()
      await $api.auth.logout()
      user.value = null
      await router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  async function getAllUsers(): Promise<any> {
    try {
      const { $api } = useNuxtApp()
      return await $api.auth.getAllUsers()
    } catch (error) {
      console.error('Get all users error:', error)
      throw error
    }
  }

  async function updateUser(newUser: Partial<User>, userId: string): Promise<any> {
    try {
      const { $api } = useNuxtApp()
      const res = await $api.auth.updateUser(newUser, userId)

      if (res.status?.value === 'success') {
        user.value = res.data.value
      }
      return res
    } catch (error) {
      console.error('Update user error:', error)
      throw error
    }
  }

  async function sendResetLink(email: string): Promise<any> {
    try {
      const { $api } = useNuxtApp()
      return await $api.auth.sendResetLink(email)
    } catch (error) {
      console.error('Send reset link error:', error)
      throw error
    }
  }

  async function resetPassword(password: string, userId: string, token: string): Promise<any> {
    try {
      const { $api } = useNuxtApp()
      return await $api.auth.resetPassword(password, userId, token)
    } catch (error) {
      console.error('Reset password error:', error)
      throw error
    }
  }

  async function uploadAvatar(fd: FormData, userId: string): Promise<any> {
    try {
      const { $api } = useNuxtApp()
      return await $api.auth.uploadAvatar(fd, userId)
    } catch (error) {
      console.error('Upload avatar error:', error)
      throw error
    }
  }

  function isUserEqual(other: User | null): boolean {
    if (!user.value || !other) return false
    return (
      user.value.email === other.email &&
      user.value.name === other.name
    )
  }

  return {
    user,
    isAuthenticated,
    registration,
    login,
    checkAuth,
    logout,
    getAllUsers,
    updateUser,
    sendResetLink,
    resetPassword,
    uploadAvatar,
    isUserEqual,
  }
}