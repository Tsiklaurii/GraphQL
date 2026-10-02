export interface IReview {
    id: string;
    content: string;
    author: { id: string; name: string };
    game: { id: string };
}
