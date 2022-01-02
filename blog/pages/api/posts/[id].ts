import type { NextApiRequest, NextApiResponse } from 'next'
import { query } from '../../../libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const results = await query(`SELECT * FROM post WHERE ${id}`)
  return res.status(200).json(results)
}
