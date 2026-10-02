import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
    query Authors {
        authors {
            id
            name
            reviews {
                game {
                    id
                }
            }
        }
    }
`;
