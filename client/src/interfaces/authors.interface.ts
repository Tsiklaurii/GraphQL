export interface IAuthor {
    id: string;
    name: string;
    reviews: { game: { id: string } }[] | null;
}
