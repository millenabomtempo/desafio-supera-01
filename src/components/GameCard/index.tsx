import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { AddToCart, GameCardContainer, GameCardInfo } from './styles'

type GameCardProps = {
  name?: string
  price?: number
  score?: number
  image?: string
  amount?: number
  handleClick?: () => void
}


export function GameCard({name="teste", price=10, score=10, image='super-mario-odyssey.png', amount=10, handleClick}: GameCardProps) {
    
  return (
    <GameCardContainer>
      <GameCardInfo>
        <span>{score}</span>
        <img src={`/images/${image}`} alt={name} />
        <strong>{name}</strong>
        <p>
        {
            new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)
          }
        </p>
      </GameCardInfo>
      <AddToCart
        type='button'
        onClick={handleClick}
      >      
        <span>COMPRAR</span>
        <div>
          <MdAddShoppingCart size={20} color="#12664F" />
          <span>{amount}</span>
        </div>
      </AddToCart>
    </GameCardContainer>
  )
}
