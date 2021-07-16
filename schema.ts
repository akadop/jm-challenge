import path from 'path'
import { makeSchema, fieldAuthorizePlugin, objectType, stringArg, nonNull, enumType, arg } from 'nexus'
import { getEntry } from './db'
import { ReqCtx, UpdateEntryArgs } from './types'

interface GetEntryArgs {
  id: string
}

const CityEnum = enumType({
  name: 'City',
  members: ['Dallas', 'Denver', 'Somewhere', 'SanFrancisco']
})

const MutationType = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('updateEntryCity', {
      type: 'Boolean',
      args: {
        state: nonNull(stringArg()),
        city: nonNull(arg({ type: 'City' }))
      },
      authorize: (_, args: UpdateEntryArgs, ctx: ReqCtx) => ctx.perms.includes(args.city),
      resolve: (_, args, ctx) => {
        console.log(ctx)
        return true
      }
    })
  }
})

const QueryType = objectType({
  name: 'Query',
  definition(t) {
    t.field('getEntry', {
      type: 'Entry',
      args: {
        id: nonNull(stringArg())
      },
      resolve: async (_, { id }: GetEntryArgs) => {
        return await getEntry(id)
      }
    })
  }
})

const EntryType = objectType({
  name: 'Entry',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.field('customer', { type: 'Customer' })
    t.nonNull.field('location', { type: 'Location' })
  }
})

const CustomerType = objectType({
  name: 'Customer',
  definition(t) {
    t.nonNull.string('firstName')
    t.nonNull.string('lastName')
    t.nonNull.int('age')
  }
})

const LocationType = objectType({
  name: 'Location',
  definition(t) {
    t.nonNull.field('city', { type: 'City' })
    t.nonNull.string('state')
  }
})

export const schema = makeSchema({
  types: [QueryType, EntryType, CustomerType, LocationType, CityEnum, MutationType],
  outputs: {
    typegen: path.join(process.cwd(), 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'schema.graphql')
  },
  plugins: [fieldAuthorizePlugin()]
})
