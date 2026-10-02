import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
    query Reviews {
        reviews {
            id
            content
            author {
                id
                name
            }
            game {
                id
            }
        }
    }
`;
