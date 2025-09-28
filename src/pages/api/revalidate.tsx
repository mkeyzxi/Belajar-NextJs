// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	revalidated: boolean;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	// res.status(200).json({ name: "John Doe", age: 21 });

	try {
		await res.revalidate('/products/IncrementalSR');
		return res.json({revalidated: true})
	}catch (error) {
		return res.status(500).send({revalidated: false} );
	}
}
