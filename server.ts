import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema'
import { Perms } from './types'

const app = express()

const normalPerms: Perms = ['Dallas', 'Denver']
const adminPerms: Perms = ['Dallas', 'Denver', 'SanFrancisco', 'Somewhere']

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return {
      perms: (Math.random() * 100) % 2 == 0 ? normalPerms : adminPerms
    }
  }
})

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
