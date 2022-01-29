# GCS Signed Download URL Sample

GCS の署名付き URL を使用してローカルにファイルを保存するサンプル

# 使い方

1. `gsutil`コマンドで署名付きダウンロード URL 生成

```bash
gsutil signurl -m GET -d 12h -c <content_type> -u gs://<bucket_name>/<object_name>
```

https://cloud.google.com/storage/docs/gsutil/commands/signurl

2. `src/pages/api/signedUrl/index.ts`に生成した URL を代入

```typescript
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const signedDownloadUrl = ""; // ここに代入
  res.status(200).json({ signedDownloadUrl });
};

export default handler;
```

3. `yarn dev`で起動
