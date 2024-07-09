import { Client } from 'pg'

const db_client = new Client({
  connectionString: 'postgres://mskhan:mskhan@localhost:5432/pos'
})

db_client.connect()

export default db_client
