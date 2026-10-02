import type { IGame } from "../interfaces/games.interface"
import GameItem from "./GameItem"

interface GamesListProps {
    games: IGame[] | undefined
}

const GamesList = ({ games }: GamesListProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {games?.map(({ id, platform, title }) => (
                <GameItem key={id} title={title} platform={platform} id={id} />
            ))}
        </div>
    )
}

export default GamesList