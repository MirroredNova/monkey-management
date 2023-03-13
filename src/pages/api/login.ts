// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  message?: string;
};

type Body = {
  username: string;
  password: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body as Body;
  if (
    req.method === 'POST' &&
    body.username === process.env.DB_USER &&
    body.password === process.env.DB_PASS
  ) {
    return res.status(200).json({ success: true });
  }
  return res.status(400).json({ success: false, message: 'Login Failed' });
}
