import { Client } from 'pg'

export const db_client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'pos',
  password: 'mskhan',
  port: 5432,
  hostname: 'postgres'
})
