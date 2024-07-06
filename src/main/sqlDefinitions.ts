import { Sequelize, DataTypes } from "sequelize";
import { DB_PATH } from "./consts";

export const sequelize = new Sequelize(DB_PATH, "", "", {
  dialect: "sqlite",
  storage: DB_PATH,
});

export const SoundSample = sequelize.define("SoundSample", {
  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrementIdentity: true,
  },

  filePath: DataTypes.STRING,
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: DataTypes.STRING,
  creationDate: DataTypes.DATE,
});
