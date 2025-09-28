// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from "next/router";
import { retrieveData, retrieveDataById } from "../../lib/firebase/service";
// const {query} = useRouter();
type Data = {
  status: boolean;
  statusCode: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  if(req.query.product![1]){
    const data = await retrieveDataById("products",  req.query.product![1] );
    res.status(200).json({ status:true, statusCode:200, data } );
  }

  const data = await retrieveData("products");
  res.status(200).json({ status:true, statusCode:200, data } );
}
