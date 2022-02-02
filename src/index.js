const { ApolloServer, gql } = require("apollo-server");

const booksFromDB = [
  {
    id: "111",
    title: "Book 1",
    pages: 100,
  },
  {
    id: "222",
    title: "Book 2",
    pages: 100,
  },
  {
    id: "333",
    title: "Book 3",
    pages: 100,
  },
  {
    id: "444",
    title: "Book 4",
    pages: 100,
  },
];

const typeDefs = gql`
  type Author {
    firstName: String
    lastName: String
  }

  type Book {
    id: String
    title: String
    author: Author
    pages: String
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const booksResolver = () => {
  console.log("Books resolver called");
  return booksFromDB;
};

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
