import { homedir } from "os";
import path from "path";

export const DATA_FOLDER = path.join(homedir(), "Documents/nom");
export const SOUNDS_FOLDER = path.join(DATA_FOLDER, "sounds");
export const IMAGES_FOLDER = path.join(DATA_FOLDER, "covers");
export const DB_PATH = path.join(DATA_FOLDER, "data.db");
