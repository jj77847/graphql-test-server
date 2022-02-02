const { gql } = require("apollo-server");

const schema = gql`
  type Author {
        firstName: String
        lastName: String 
    }
  
  type Book {
    id: String
    title: String
    author: Author
    }
  }

  type Query {
      
    books: [Book]
    authors: [Author]
  }
`;

// (time)m week 17, day 1 (graphql)
