import classNames from 'classnames'
import React from 'react'
import style from './style.module.scss'

interface RadioButtonProp {
  classes?: Array<string>;
  name: string;
  checked?: boolean;
  children: string;
  onClick?: () => void;
}

function RadioButton({
  classes,
  checked = false,
  name,
  children,
  onClick,
}: RadioButtonProp) {
  const [isCheck, setIsCheck] = React.useState(false)
  const radioRef = React.useRef()
  const handleClick = (e) => {
    // console.log(radioRef)
    // setIsCheck(radioRef)
  }
  return (
    <label
      className={classNames(style.button, classes, {
        [style.button__active]: isCheck,
      })}
    >
      {children}
      <input ref={radioRef} type='radio' name={name} onClick={handleClick} />
    </label>
  )
}

export default RadioButton
