import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema'
import { Perms } from './types'

const normalPerms: Perms = ['Dallas', 'Denver']
const adminPerms: Perms = ['Dallas', 'Denver', 'SanFrancisco', 'Somewhere']

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return {
      perms: Math.random() < 0.5 ? normalPerms : adminPerms
    }
  }
})

const app = express()

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
