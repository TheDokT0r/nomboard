import { Sequelize, DataTypes } from "sequelize";
import { DB_PATH } from "./consts";
import { v4 as uuidv4 } from "uuid";

export const sequelize = new Sequelize(DB_PATH, "", "", {
  dialect: "sqlite",
  storage: DB_PATH,
});

export const SoundSample = sequelize.define("SoundSample", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    // autoIncrementIdentity: true,
    defaultValue: uuidv4(),
    allowNull: false,
  },

  filePath: DataTypes.STRING,
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: DataTypes.STRING,
});
