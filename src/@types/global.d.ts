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
}

export {};
