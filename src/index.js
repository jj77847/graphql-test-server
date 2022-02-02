const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Author {
    firstName: String
    lastName: String
  }

  type Book {
    id: String
    title: String
    author: Author
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const booksResolver = () => {};

const authorResolver = () => {};

const resolvers = {
  Query: {
    books: booksResolver,
    authors: authorResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// (time)m week 17, day 1 (graphql)
