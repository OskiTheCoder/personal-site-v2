// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

type Vote = {
  coffee: number;
  tea: number;
};

type Error = {
  message: string;
};

const prisma = new PrismaClient();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(5, '60 s'),
});

const getPreviousVoteCount = async () =>
  await prisma.votes.findUnique({
    where: {
      id: 1,
    },
    select: {
      id: true,
      coffee: true,
      tea: true,
    },
  });

const getNewVoteCount = async (
  coffee: number,
  tea: number,
  previousVoteCount: any
) =>
  await prisma.votes.update({
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

// todo: can we strongly type body of nextapirequest?
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vote | Error>
) {
  try {
    if (req.method === 'POST') {
      const result = await ratelimit.limit('api');
      res.setHeader('X-RateLimit-Limit', result.limit);
      res.setHeader('X-RateLimit-Remaining', result.remaining);
      const { coffee, tea } = req.body;
      const previousVoteCount = await getPreviousVoteCount();
      if (!result.success) {
        return res.status(200).json({
          coffee: previousVoteCount!.coffee | 0,
          tea: previousVoteCount!.tea | 0,
        });
      }
      const newVoteCount = await getNewVoteCount(
        coffee,
        tea,
        previousVoteCount
      );
      res
        .status(200)
        .json({ coffee: newVoteCount.coffee, tea: newVoteCount.tea });
    } else {
      return res.status(405).json({ message: 'oops method not allowed :(' });
    }
  } catch {
    return res.status(500).json({ message: 'oops something went wrong :(' });
  }
}
