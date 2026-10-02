import { useQuery } from "@apollo/client/react"
import { useParams } from "react-router-dom"
import { GET_GAME } from "../graphql/queries/get-game"
import type { IGame } from "../interfaces/games.interface"
import GameAuthors from "../components/GameAuthors"
import GameReviews from "../components/GameReviews"

const GamePage = () => {
    const { id } = useParams()
    const { data, loading, error } = useQuery<{ game: IGame | null }>(GET_GAME, {
        variables: { gameId: id }
    })

    if (loading) return <h1>Loading ...</h1>
    if (error) return <h3>Error: {error.message}</h3>
    if (!data?.game) return <h3>Game not found</h3>

    const { title, platform } = data.game

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {platform.map((p: string) => (
                    <li key={p}>{p}</li>
                ))}
            </ul>
            <GameReviews gameId={data.game.id} />
            <GameAuthors gameId={data.game.id} />
        </div>
    )
}

export default GamePage
