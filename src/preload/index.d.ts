import { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
  }

  interface AudioMetaData {
    id: string;
    audioPath: string;
    imagePath: string;
    name: string;
  }
}
