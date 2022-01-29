import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const signedDownloadUrl = ""; // gsutilで生成した署名付きURLを代入
  res.status(200).json({ signedDownloadUrl });
};

export default handler;
