import { NextApiRequest, NextApiResponse } from "next";

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Redirect the user back to a provided redirect path or the index page
  res.writeHead(307, { Location: req.query.redirect || "/" });
  res.end();
}
