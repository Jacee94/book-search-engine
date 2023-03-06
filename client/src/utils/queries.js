import { gql } from "@apollo/client";

export const ME = gql`
  query Query {
    me {
      _id
      bookCount
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
`;
