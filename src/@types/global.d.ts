declare global {
  interface NewSoundSample {
    audioPath: string;
    image: {
      id?: string;
      imageType: string;
      imagePath: string;
      base64: string;
    } | null;
    name: string;
    creationDate: Date;
  }

  interface SoundboardData {
    id: string;
    filePath: string;
    imagePath: string;
    name: string;
    creationDate: Date;
    updatedAt: Date;
  }
}

export {};
