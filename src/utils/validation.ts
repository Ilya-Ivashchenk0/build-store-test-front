import { object, string } from 'zod'

export const signSchema = object({
  email: string().email(),
  password: string().min(6)
})