'use client'

import { useState } from 'react'
import cn from 'classnames'
import classes from './styles.module.scss'
import { inputProps } from './types'

export const Input: React.FC<inputProps> = ({
  value,
  changeValue,
  errorValue,
  name
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className={cn(classes.inputWrapper)}>
        <label
          className={cn(classes.inputLabel, {
            [classes.onFocus]: focus || value !== ''
          })}
          htmlFor={name}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        <input
          className={cn(classes.input, {
            [classes.onFocus]: focus || value !== ''
          })}
          type={name}
          id={name}
          value={value}
          autoComplete="off"
          onChange={changeValue}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
      <span className={cn(classes.inputError)}>{errorValue}</span>
    </>
  )
}
