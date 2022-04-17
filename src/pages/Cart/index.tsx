import React from 'react'
import { MdDelete, MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';
import { CartContainer, CartList, CartListItem, CartListItemGameInfo, CartListItemQuantity, CartListItemSubtotal, CartTotal } from './styles'

type Game = {
  id: number
  name: string
  price: number
  score: number
  image: string
  amount: number
}


export default function Cart() {
  const { cart, removeGame, updateGameAmount } = useCart()

  const cartFormatted = cart.map(game => ({
    ...game,    
    subTotal: (game.price * game.amount)
  }))

  const total =
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.amount * product.price
    }, 0)

    function handleProductIncrement(game: Game) {
      updateGameAmount({ gameId: game.id, amount: game.amount + 1})
    }
  
    function handleProductDecrement(game: Game) {
      updateGameAmount({ gameId: game.id, amount: game.amount - 1})
    }
  
    function handleRemoveProduct(productId: number) {
      removeGame(productId)
    }

  return (
    <CartContainer>
      <Link to='/'>
        <MdKeyboardBackspace size={25}/>
        Voltar
      </Link>
      <CartList>
        {
          cartFormatted.map(game => {
            return (

              <CartListItem 
                key={game.id}
              >
                <CartListItemGameInfo>
                  <img src={`/images/${game.image}`} alt={game.name} />
                  <strong>{game.name}</strong>
                </CartListItemGameInfo>

                <div>
                  <CartListItemQuantity>
                    <button
                      disabled={game.amount <= 1}
                      onClick={() => handleProductDecrement(game)}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={game.amount}
                      readOnly
                    />
                    <button
                      disabled={game.amount >= 7}
                      onClick={() => handleProductIncrement(game)}
                    >
                      +
                    </button>
                  </CartListItemQuantity>
                  
                  <CartListItemSubtotal>
                    <p>{
                        new Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(game.subTotal)
                      }
                    </p>

                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(game.id)}
                    >
                      <MdDelete size={25} />
                    </button>
                  </CartListItemSubtotal>

                  
                  
                </div>
            </CartListItem>
            )
          })
        }        
        <CartTotal>
          <span>Total:</span>
          <strong>
          {
            new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)
          }
          </strong>
        </CartTotal>
      </CartList>
    </CartContainer>
  )
}
