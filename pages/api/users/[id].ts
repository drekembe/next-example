// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Envelope, User } from 'api'
import db from '../db'

type Data = {
  user: User | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.query.id as string;
  res.status(200).json({ user: db.users[id] || null })
}
