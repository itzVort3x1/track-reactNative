import { gql } from "@apollo/client";

export const FETCH_DATA = gql`
     query fetch{
          events{
               title
               id
          }
     }
`;