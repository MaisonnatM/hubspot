import axios from "axios";
import { getToken } from "next-auth/jwt";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const secret = process.env.NEXTAUTH_SECRET;
let accessToken: string = "";

const getContact = async () => {
  const { data } = await axios.get(
    `https://api.hubapi.com/crm/v3/objects/contacts?limit=1&archived=false`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return data;
};

var output = async (req, res) => {

  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).end();
  }

  const token = await getToken({ req, secret });

  accessToken = token.access_token;

  const data = await getContact();

  res.status(200).json(data);
}

export default output
