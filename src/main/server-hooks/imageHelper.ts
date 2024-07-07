import fs from "fs";
import path from "path";
import { ASSETS_FOLDER } from "../consts";

export const getImageMetaData = (
  _: unknown,
  imagePath: string,
): NewSoundSample["image"] | null => {
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

export const imageToBase64 = (
  _: unknown,
  soundId: string,
  imageName: string,
): string | null => {
  const imagePath = path.join(ASSETS_FOLDER, soundId, imageName);

  if (!fs.existsSync(imagePath)) {
    return null;
  }

  const imageType = path.extname(imagePath.split(".")[0]);
  const basicBase64 = fs.readFileSync(imagePath, "base64");
  return `data:image/${imageType};base64, ${basicBase64}`;
};
