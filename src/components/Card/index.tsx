import classNames from 'classnames'
import React, { MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import type { RootState } from '../../redux/store'
import style from './style.module.scss'

interface TypeCard {
  id: string
  value: number
  type: string
}

interface CardProps {
  id: string
  card: TypeCard
  onClick: (id: string, card: TypeCard) => void
}

function Card({ id, card, onClick }: CardProps) {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.classList.add(style.card_flip)
    onClick(id, card)
  }
  return (
    <div className={style.card} onClick={handleClick}>
      <span className={style.card__front}></span>
      <span
        className={classNames(style.card__back, {
          [style.card__back_open]: card.type === 'open',
        })}
      >
        {card.value}
      </span>
    </div>
  )
}

export default Card
