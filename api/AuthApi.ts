export default {
  registration(user: any): Promise<any> {
    return useApiFetch('/auth/registration', { method: 'POST', body: user })
  },
  login(email: string, password: string): Promise<any> {
    return useApiFetch('/auth/login', { method: 'POST', body: { email, password } })
  },
  refresh(): Promise<any> {
    return useApiFetch('/auth/refresh', { method: 'GET' })
  },
  logout(): Promise<any> {
    return useApiFetch('/auth/logout', { method: 'POST' })
  },
  updateUser(user: any, userId: string): Promise<any> {
    return useApiFetch('/auth/update', { method: 'POST', body: { user, userId } })
  },
  sendResetLink(email: string) {
    return useApiFetch('/auth/send-reset-link', {
      method: 'POST',
      body: { email }
    })
  },
  resetPassword(password: string, userId: string, token: string) {
    return useApiFetch('/auth/reset-password', {
      method: 'POST',
      body: { password, userId, token }
    })
  },
  getAllUsers() {
    return useApiFetch('/auth/get-all-users', {
      method: 'GET',
    })
  },
  uploadAvatar(formData: FormData, userId: string) {
    return useApiFetch(`/auth/upload-avatar?user_id=${userId}`, { method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, body: formData })
  },
}
