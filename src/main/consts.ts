import { homedir } from "os";
import path from "path";

export const DATA_FOLDER = path.join(homedir(), "Documents/nom");
export const ASSETS_FOLDER = path.join(DATA_FOLDER, "assets");
export const DB_PATH = path.resolve(DATA_FOLDER, "data.db");
