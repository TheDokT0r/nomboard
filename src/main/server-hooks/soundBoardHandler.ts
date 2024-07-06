import fs from "fs-extra";
import path from "path";
import { IMAGES_FOLDER, SOUNDS_FOLDER } from "../consts";
import { SoundSample } from "../sqlDefinitions";
import { randomUUID } from "crypto";

export const addAudioToSoundboard = async (
  _: unknown,
  audioMetaData: NewSoundSample,
) => {
  const { audioPath, image, name, creationDate } = audioMetaData;

  const newAudioPath = path.join(
    SOUNDS_FOLDER,
    `${randomUUID()}${path.extname(audioPath)}`,
  );

  fs.copySync(audioPath, newAudioPath);

  let newImagePath: string | null = null;
  if (image) {
    newImagePath = path.join(
      IMAGES_FOLDER,
      `${randomUUID()}${path.extname(image.imagePath)}`,
    );

    fs.copySync(image.imagePath, newImagePath);
  }

  const getImagePath = () => {
    if (!image) return null;
    return path.basename(image.imagePath);
  };

  const soundSample = await SoundSample.create({
    filePath: path.basename(audioPath),

    imagePath: newImagePath ? path.basename(newImagePath) : null,

    name,
    creationDate,
  });
};
