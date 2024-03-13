'use client'

import { useState } from 'react'
import cn from 'classnames'
import classes from './styles.module.scss'
import { inputProps } from './types'

export const Input: React.FC<inputProps> = ({
  className,
  value,
  changeValue,
  errorValue,
  name,
  required
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div
        className={cn(
          className,
          classes.inputWrapper,
          {
            [classes.valid]: !errorValue && value !== ''
          },
          {
            [classes.noValid]: errorValue && errorValue !== ''
          }
        )}
      >
        <label
          className={cn(
            className,
            classes.inputLabel,
            {
              [classes.onFocus]: focus || value !== ''
            },
            {
              [classes.required]: required
            }
          )}
          htmlFor={name}
        >
          {`${name.charAt(0).toUpperCase()}${name.slice(1)}:`}
        </label>
        <input
          className={cn(className, classes.input, {
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
        <span
          className={cn(className, {
            [classes.inputCheckbox]: !errorValue && value !== ''
          })}
        ></span>
      </div>
      <span className={cn(className, classes.inputError)}>{errorValue}</span>
    </>
  )
}
