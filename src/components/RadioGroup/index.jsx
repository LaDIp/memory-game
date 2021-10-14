import React from 'react'
import style from './style.module.scss'

interface RadioGroupProp {
  children: React.ElementType<any, any>;
}

function RadioGroup({ children }: RadioGroupProp) {
  console.log(children)
  return <div className={style.group}>{children}</div>
}

export default RadioGroup
