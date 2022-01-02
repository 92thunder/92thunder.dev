// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import serverlessMysql from 'serverless-mysql'
import { query } from '../../libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results = await query('SELECT * FROM post')
  console.log(results)
  return res.status(200).json(results)
}
