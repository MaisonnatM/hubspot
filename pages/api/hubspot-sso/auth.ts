import jwt from "jsonwebtoken";
import { getToken } from "next-auth/jwt";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get email
  const secret = process.env.NEXTAUTH_SECRET;
  const userToken = await getToken({ req, secret });
  const userEmail = userToken.email;

  //Get info from request url
  const query = req.query;
  const { redirect_url } = query;

  // Generate a JWT
  const token = jwt.sign(
    {
      email: userEmail
      // email: 'chriscain@demospot.org'
    },
    process.env.HUBSPOT_MEMBERSHIP_SECRET,
    { expiresIn: "1h" }
  );

  // For intial setup in HubSpot, the url path must end in /verify, after than this can be removed.
  //  const redirectUrl = `http://jwt.demolytics.site/_hcms/mem/jwt/verify?jwt=${token}&redirect_url=${redirect_url}`;
  const redirectUrl = `http://jwt.demolytics.site/_hcms/mem/jwt?jwt=${token}&redirect_url=${redirect_url}`;
  res.redirect(307, redirectUrl);
}
