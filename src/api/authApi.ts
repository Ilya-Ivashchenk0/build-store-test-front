import { consts } from '@/utils/consts'

function getResponseData(res: Response) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  return res.json()
}

export const register = (email: string, password: string) => {
  return fetch(`${consts.API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(res => {
    return getResponseData(res)
  })
}

export const login = (email: string, password: string) => {
  return fetch(`${consts.API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  }).then(res => {
    return getResponseData(res)
  })
}
