import fs from "fs";
import path from "path";

export const getImageMetaData = (
  _: unknown,
  imagePath: string,
): SoundboardImageData | null => {
  if (!fs.existsSync(imagePath) || !fs.statSync(imagePath).isFile()) {
    return null;
  }

  const imageType = path.extname(imagePath.split(".")[0]);

  const basicBase64 = fs.readFileSync(imagePath, "base64");
  const base64 = `data:image/${imageType};base64, ${basicBase64}`;

  return {
    imagePath,
    imageType,
    base64,
  };
};
