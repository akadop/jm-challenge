import { DBOneEntry, DBTwoEntry, NormalizedEntry } from './types'

export function normalizeDBOneEntry(entry: DBOneEntry): NormalizedEntry {
  return {
    id: entry.id,
    customer: {
      firstName: entry.firstName,
      lastName: entry.lastName,
      age: entry.age
    },
    location: {
      city: entry.city,
      state: entry.state
    }
  }
}

export function normalizeDBTwoEntry(entry: DBTwoEntry): NormalizedEntry {
  return {
    id: entry.id,
    customer: {
      firstName: entry.customer.firstName,
      lastName: entry.customer.lastName,
      age: entry.age
    },
    location: {
      city: entry.location.city,
      state: entry.location.state
    }
  }
}
