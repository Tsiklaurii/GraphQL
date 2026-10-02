import { useQuery } from "@apollo/client/react"
import { GET_REVIEWS } from "../graphql/queries/get-reviews"
import type { IReview } from "../interfaces/reviews.interface"

interface GameReviewsProps {
    gameId: string
}

const GameReviews = ({ gameId }: GameReviewsProps) => {
    const { data, loading, error } = useQuery<{ reviews: (IReview | null)[] | null }>(GET_REVIEWS)

    if (loading) return <h3>Loading reviews...</h3>
    if (error) return <h3>Error: {error.message}</h3>

    const reviews = data?.reviews?.filter((review): review is IReview =>
        review !== null && review.game.id === gameId
    ) ?? []

    return (
        <div>
            <h3>Reviews</h3>
            {reviews.length === 0 ? <p>No reviews found</p> : (
                <ul>
                    {reviews.map(({ id, content, author }) => (
                        <li key={id}>
                            <strong>{author.name}</strong>: {content}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GameReviews
