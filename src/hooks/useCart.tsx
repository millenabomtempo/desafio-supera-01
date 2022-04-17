import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

type CartProviderProps = {
  children: ReactNode;
}

type Game = {
  id: number
  name: string
  price: number
  score: number
  image: string
  amount: number
}

type UpdateGameAmount = {
  gameId: number;
  amount: number;
}

type CartContextData = {
  cart: Game[];
  addGame: (gameId: number) => Promise<void>
  removeGame: (gameId: number) => void
  updateGameAmount: ({ gameId, amount }: UpdateGameAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  
  const [cart, setCart] = useState<Game[]>(() => {
    const storagedCart = localStorage.getItem('GameON:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addGame = async (gameId: number) => {
    try {
      const updatedCart = [...cart]
      const gameExists = updatedCart.find(game => game.id === gameId)

      const currentAmount = gameExists ? gameExists.amount : 0
      const amount = currentAmount + 1

      if (amount > 6) {

        toast.error('Quantidade máxima de jogos é 6')

        return
      }

      if (gameExists) {

        gameExists.amount = amount

      } else {

        const game = await api.get(`/games/${gameId}`)

        const newGame = {
          ...game.data,
          amount: 1
        }

        updatedCart.push(newGame)
      }

      setCart(updatedCart)
      localStorage.setItem('GameON:cart', JSON.stringify(updatedCart))

    } catch {

      toast.error('Erro na adição do jogo');
      
    }
  }
  
  const removeGame = (gameId: number) => {
    
    try {
      const updatedCart = [...cart]
      const gameIndex = updatedCart.findIndex(game => game.id === gameId)

      if (gameIndex >= 0) {
        updatedCart.splice(gameIndex, 1)

        setCart(updatedCart)
        localStorage.setItem('GameON:cart', JSON.stringify(updatedCart))
      
      } else {
        
        throw Error()
      
      }

    } catch {
      toast.error('Erro na remoção do jogo');
    }
  }

  const updateGameAmount = async ({
    gameId,
    amount,
  }: UpdateGameAmount) => {
    try {
      
      const updatedCart = [...cart]
      const gameExists = updatedCart.find(game => game.id === gameId)

      if (amount <= 0) return

      if (amount > 6) {

        toast.error('Quantidade máxima de jogos é 6')

        return
      }
      


      if (gameExists) {
       
        gameExists.amount = amount

        setCart(updatedCart)
        localStorage.setItem('GameON:cart', JSON.stringify(updatedCart))
      
      } else {
      
        throw Error()
      
      }

    } catch {
      
      toast.error('Erro na alteração de quantidade de jogos');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addGame, removeGame, updateGameAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}