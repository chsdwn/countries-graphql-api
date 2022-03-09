import { GraphQLServer } from 'graphql-yoga'
import data from 'data'
import typeDefs from 'graphql/typeDefs'
import resolvers from 'graphql/resolvers'

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    db: data
  }
})

const port = process.env.PORT || 3000
server.start({ port }, () => console.log(`Running on port ${port}`))
