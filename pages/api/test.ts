import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: 'John Doe' })
}
