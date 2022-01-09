import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll

  res.statusCode = 200 //ok
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ data: allEntries }))
}

export default allAvos
