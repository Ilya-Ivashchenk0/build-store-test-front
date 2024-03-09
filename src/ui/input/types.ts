import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface inputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string
  changeValue: React.ChangeEventHandler<HTMLInputElement>
  errorValue: string | undefined
  name: string
}
