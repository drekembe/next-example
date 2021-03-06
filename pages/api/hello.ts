// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Envelope, User } from 'api'
import db from './db'

type Data = {
  users: { [id: string]: User }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(db.users);
  db.version = db.version + 1;
  res.status(200).json({ users: db.users })
}
