export interface DBOneEntry {
  age: number
  city: string
  firstName: string
  id: string
  lastName: string
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
    city: string
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
    city: string
    state: string
  }
}
