import type { NextApiRequest, NextApiResponse } from "next";

const data = {
  response: {
    accounts: [
      {
        accountId: "abc123",
        accountName: "Joe Cool Static"
      },
      {
        accountId: "abc234",
        accountName: "Jane Cool Static"
      }
    ]
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.send(data);
}
