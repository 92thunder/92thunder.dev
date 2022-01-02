import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: '127.0.0.1',
    port: 3306,
    database: 'blog',
    user: 'root',
    password: process.env.DB_PASSWORD ?? '',
  }
})

export async function query(
  q: string,
  values: (string | number)[] | string | number = []
) {
  try {
    const results = await db.query(q, values)
    await db.end()
    return results
  } catch (e: any) {
    throw Error(e.message)
  }
}