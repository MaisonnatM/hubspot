import type { NextApiRequest, NextApiResponse } from "next";

const data = {
  results: [
    {
      objectId: 245,
      title: "Zip: 90210",
      link: "http://example.com/1",
      zip: "90210",
      address: "123 Struggle Street"
    },
    {
      objectId: 988,
      title: "Zip: 90210",
      link: "http://example.com/1",
      zip: "90210",
      address: "123 Struggle Street"
    }
  ]
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.send(data);
}
