declare global {
  interface SoundboardImageData {
    imageType: string;
    imagePath: string;
    base64: string;
  }

  interface AudioMetaData {
    id: string;
    audioPath: string;
    image: SoundboardImageData;
    name: string;
  }
}

export {};
