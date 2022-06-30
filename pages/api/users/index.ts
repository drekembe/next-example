// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Envelope, User } from 'api'
import db from '../db'
import { v4 as uuid } from 'uuid'

type Data = {
  users: User[]
} | { user: User | null }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    let limit = Number.parseInt(req.query.limit as any) || 20
    let offset = Number.parseInt(req.query.offset as any) || 0
    res.status(200).json({ users: Object.values(db.users).slice(offset, offset + limit) })
  }
  if (req.method === 'POST') {
    let id = uuid()
    db.users[id] = {
      id,
      ...req.body
    }
    res.status(200).json({ user: db.users[id] || null })
  }
}
