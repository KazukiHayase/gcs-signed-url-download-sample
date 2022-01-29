import { MouseEventHandler } from "react";
import { downloadFile } from "../utils/downloadFile";

const IndexPage = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      const res = await fetch("api/signedUrl", { method: "GET" });
      const data = await res.json();
      const signedDownloadUrl = data.signedDownloadUrl;
      await downloadFile(signedDownloadUrl, "text/csv", "sample.csv");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>GCS signed download url sample</h1>
      <button onClick={handleClick}>ファイルをダウンロード</button>
    </div>
  );
};

export default IndexPage;
