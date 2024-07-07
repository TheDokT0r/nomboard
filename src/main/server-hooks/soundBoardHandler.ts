import fs from "fs-extra";
import path from "path";
import { SoundSample } from "../sqlDefinitions";
import { ASSETS_FOLDER } from "../consts";

export const addAudioToSoundboard = async (
  _: unknown,
  audioMetaData: NewSoundSample,
) => {
  const { audioPath, image, name } = audioMetaData;

  await SoundSample.sync();

  const soundSample = await SoundSample.create({
    filePath: path.basename(`audio${path.extname(audioPath)}`),
    imagePath: image ? `cover${path.extname(image.imagePath)}` : null,
    name,
  });

  const id: number = soundSample.dataValues.id;

  const trackFolder = path.join(ASSETS_FOLDER, id.toString());
  fs.mkdirsSync(trackFolder);

  const newAudioPath = path.join(
    trackFolder,
    `audio${path.extname(audioPath)}`,
  );

  fs.copySync(audioPath, newAudioPath);

  let newImagePath: string | null = null;
  if (image) {
    newImagePath = path.join(
      trackFolder,
      `cover${path.extname(image.imagePath)}`,
    );

    fs.copySync(image.imagePath, newImagePath);
  }
};

export const getSoundboard = async (): Promise<SoundboardData[]> => {
  const response = await SoundSample.findAll();
  return response.map((value) => value.dataValues);
};
