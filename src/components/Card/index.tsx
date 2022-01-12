import classNames from 'classnames'
import React, { MouseEvent } from 'react'
import { useActions } from '../../hooks'
import style from './style.module.scss'

type CardProps = {
  card: Card
  onClick: (card: Card) => void
}

function Card({ card, onClick }: CardProps) {
  const { flipCardAction } = useActions()
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (card.type === 'hide') {
      flipCardAction(card)
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

export default React.memo(Card, (prev, next) => prev.card === next.card)
