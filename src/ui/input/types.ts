export interface inputProps {
  value: string
  changeValue: React.ChangeEventHandler<HTMLInputElement>
  errorValue: string | undefined
  name: string
}