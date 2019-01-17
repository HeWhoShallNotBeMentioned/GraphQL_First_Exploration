const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }
  
  type Link {
    id: ID!
    description: String!
    url: String!
  }`;

const resolvers = {
  Query: {
    info: () => `This is the API of Hackernews Clone`,
    feed: () => links,
  },

  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url,
  },
};

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial on GraphQL',
  },
  {
    id: 'link-1',
    url: 'www.facebook.com',
    description: 'The creators of GraphQL',
  },
];

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
