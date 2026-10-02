import { useQuery } from "@apollo/client/react"
import { GET_AUTHORS } from "../graphql/queries/get-authors"
import type { IAuthor } from "../interfaces/authors.interface"

interface GameAuthorsProps {
    gameId: string
}

const GameAuthors = ({ gameId }: GameAuthorsProps) => {
    const { data, loading, error } = useQuery<{ authors: (IAuthor | null)[] | null }>(GET_AUTHORS)

    if (loading) return <h3>Loading authors...</h3>
    if (error) return <h3>Error: {error.message}</h3>

    const authors = data?.authors?.filter((author): author is IAuthor =>
        author !== null && !!author.reviews?.some((review) => review.game.id === gameId)
    ) ?? []

    return (
        <div>
            <h3>Review authors</h3>
            {authors.length === 0 ? <p>No authors found</p> : (
                <ul>
                    {authors.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GameAuthors
