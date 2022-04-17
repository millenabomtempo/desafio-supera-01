import { useEffect, useState } from "react";
import { GameCard } from "../../components/GameCard"
import { useCart } from "../../hooks/useCart";
import { api } from "../../services/api";
import { HomeContainer } from "./styles";

type GamesResponse = {
  id: number
  name: string
  price: number
  score: number
  image: string
}

interface Games extends GamesResponse {
  amount: number
}


type CartItemsAmount = {
  [key: number]: number;
}

export default function Home () {
  const { addGame, cart } = useCart()
  const [games, setGames] = useState<Games[]>()

  const cartItemsAmount = cart.reduce((sumAmount, game) => {
    sumAmount[game.id] = game.amount

    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<GamesResponse[]>('games')  

      const allGames = response.data.map(game => ({
        ...game,
        amount: 0
      }))

      setGames(allGames)
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addGame(id)
  }

  return(
    <HomeContainer>
      {
        games?.map(game => {
          return(
            <GameCard 
              key={game.id}
              name={game.name}
              price={game.price}
              score={game.score}
              image={game.image}
              amount={cartItemsAmount[game.id] || 0}
              handleClick={() => handleAddProduct(game.id)}
            />
          )
        })
      }
    </HomeContainer>
  )
}
