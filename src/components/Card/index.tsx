import classNames from 'classnames'
import React, { MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { flipCardAction } from '../../redux/actions/gridActions'
import type { RootState } from '../../redux/store'
import style from './style.module.scss'

interface TypeCard {
  id: string
  value: number
  type: string
}

interface CardProps {
  card: TypeCard
  onClick: (card: TypeCard) => void
}

function Card({ card, onClick }: CardProps) {
  const dispatch = useAppDispatch()
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (card.type === 'hide') {
      dispatch(flipCardAction(card))
      onClick(card)
    }
  }
  return (
    <div
      className={classNames(style.card, {
        [style.card_flip]: card.type !== 'hide',
      })}
      onClick={handleClick}
    >
      <span className={style.card__front}></span>
      <span
        className={classNames(
          style.card__back,

          {
            [style.card__back_open]: card.type === 'open',
            'material-icons material-icons-outlined':
              typeof card.value === 'string',
          },
        )}
      >
        {card.value}
      </span>
    </div>
  )
}

export default Card
