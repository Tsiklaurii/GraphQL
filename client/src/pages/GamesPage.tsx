import { useQuery } from "@apollo/client/react"
import { GET_GAMES } from "../graphql/queries/get-games"
import type { IGame } from "../interfaces/games.interface"
import GamesList from "../components/GamesList"

const GamesPage = () => {
    const { data, loading, error } = useQuery<{ games: IGame[] }>(GET_GAMES)

    if (loading) return <h1>Loading ...</h1>
    if (error) return <h3>Error: {error.message}</h3>

    return (
        <div>
            <GamesList games={data?.games} />
        </div>
    )
}

export default GamesPage