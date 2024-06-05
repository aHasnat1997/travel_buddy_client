export const imageUpload = async (files: File) => {
  if (!files) return;
  // console.log({ files });

  let data = new FormData();
  data.append("file", files);
  data.append("upload_preset", "upload_images");

  const res = await fetch(`/api/upload`, {
    method: "POST",
    body: data,
  });
  const imageResponse = await res.json();
  // console.log(imageResponse);
  return imageResponse.uploadedImageData.secure_url;
};
