import { NexusGenEnums } from './nexus-typegen'

export type Perms = NexusGenEnums['City'][]

export interface DBOneEntry {
  age: number
  city: NexusGenEnums['City']
  firstName: string
  id: string
  lastName: string
  state: string
}

export type ReqCtx = {
  perms: Perms
}

export type UpdateEntryArgs = {
  city: NexusGenEnums['City']
  state: string
}

export type DBOneRecords = Record<string, DBOneEntry>

export interface DBTwoEntry {
  id: string
  customer: {
    firstName: string
    lastName: string
  }
  age: number
  location: {
    city: NexusGenEnums['City']
    state: string
  }
}

export type DBTwoRecords = Record<string, DBTwoEntry>

export type NormalizedEntry = {
  id: string
  customer: {
    firstName: string
    lastName: string
    age: number
  }
  location: {
    city: NexusGenEnums['City']
    state: string
  }
}

export type DBMigrationMap = Record<string, boolean>
