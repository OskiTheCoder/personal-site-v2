// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Vote = {
  coffee: number;
  tea: number;
};

type Error = {
  message: string;
};

// todo: can we strongly type body of nextapirequest?
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vote | Error>
) {
  try {
    if (req.method === 'POST') {
      const { coffee, tea } = req.body;
      const previousVoteCount = await prisma.votes.findUnique({
        where: {
          id: 1,
        },
        select: {
          id: true,
          coffee: true,
          tea: true,
        },
      });
      const newVoteCount = await prisma.votes.update({
        where: {
          id: 1,
        },
        data: {
          coffee:
            coffee === 1
              ? previousVoteCount!.coffee + 1
              : previousVoteCount!.coffee,
          tea: tea === 1 ? previousVoteCount!.tea + 1 : previousVoteCount!.tea,
        },
      });
      res
        .status(200)
        .json({ coffee: newVoteCount.coffee, tea: newVoteCount.tea });
    } else {
      return res.status(405).json({ message: 'method not allowed :(' });
    }
  } catch {
    return res.status(500).json({ message: 'oops something went wrong :(' });
  }
}
