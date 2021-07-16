import axios, { AxiosResponse } from 'axios'
import { DBMigrationMap, DBOneRecords, DBTwoRecords, NormalizedEntry, UpdateEntryArgs } from './types'
import { normalizeDBOneEntry, normalizeDBTwoEntry } from './normalize'

const DB_ONE = 'https://api.jsonbin.io/b/60f1cc76c1256a01cb70c2ac'
const DB_TWO = 'https://api.jsonbin.io/b/60f1cbfda917050205c8f724'
const DB_CHECK_ENDPOINT = 'https://api.jsonbin.io/b/60f1d49aa917050205c8fd4c'
const UPDATE_ENDPOINT = 'https://api.jsonbin.io/b/60f1eca5a917050205c90bb6'

export async function getDBOneEntries(): Promise<AxiosResponse<DBOneRecords>> {
  return await axios.get<DBOneRecords>(DB_ONE, {
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': process.env.SECRET
    }
  })
}

export async function getDBTwoEntries(): Promise<AxiosResponse<DBTwoRecords>> {
  return await axios.get<DBTwoRecords>(DB_TWO, {
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': process.env.SECRET
    }
  })
}

export async function getDBMap(): Promise<AxiosResponse<DBMigrationMap>> {
  return await axios.get<DBMigrationMap>(DB_CHECK_ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': process.env.SECRET
    }
  })
}

export async function getEntry(id: string): Promise<NormalizedEntry | null> {
  const { data } = await getDBMap()

  const entryExists = data.hasOwnProperty(id)

  if (entryExists) {
    const isMigrated = data[id]

    if (isMigrated) {
      const dbOneEntries = await getDBOneEntries()
      return normalizeDBOneEntry(dbOneEntries.data[id])
    } else {
      const dbTwoEntries = await getDBTwoEntries()
      return normalizeDBTwoEntry(dbTwoEntries.data[id])
    }
  }

  return null
}

// export async function updateEntry(patch: UpdateEntryArgs): Promise<AxiosResponse<NormalizedEntry>> {
//   return await axios.patch<NormalizedEntry>(UPDATE_ENDPOINT, {
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Master-Key': process.env.SECRET
//     },
//     body: {
//       location: patch
//     }
//   })
// }
