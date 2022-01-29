import saveAs from "file-saver";

export const downloadFile = async (
  signedDownloadUrl: string,
  contentType: string,
  fileName: string
): Promise<void> => {
  const res = await fetch(signedDownloadUrl, {
    method: "GET",
    headers: { "Content-Type": contentType },
  });
  if (!res.ok) {
    return Promise.reject(new Error("Fail to download file from GCS"));
  }
  const blob = await res.blob();

  saveAs(blob, fileName);
};
