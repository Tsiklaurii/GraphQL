import { useNavigate } from "react-router-dom"
import GameAuthors from "./GameAuthors"
import GameReviews from "./GameReviews"

interface GameItemProps {
    id: string
    title: string
    platform: string[]
}

const GameItem = ({ id, title, platform }: GameItemProps) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/${id}`)}
            style={{ width: '200px', border: '1px solid gray', padding: '10px', borderRadius: '8px', margin: '2px', cursor: 'pointer' }}>
            <div style={{ height: '150px' }}>
                <h1>{title}</h1>
                <ul>
                    {platform.map((p) => (
                        <li key={p}>{p}</li>
                    ))}
                </ul>
            </div>
            <GameReviews gameId={id} />
            <GameAuthors gameId={id} />
        </div>
    )
}

export default GameItem
