import { model, models, Schema } from "mongoose";

export interface ILocalizedData {
  title: string;
  description: string;
  neighborhood?: string;
  services?: string[];
}

export interface IProject {
  data: {
    en: ILocalizedData;
    ar: ILocalizedData;
  };
  startingPrice: number;
  area: number; // in square meters
  rooms: number;
  baths: number;
  floors: number;
  status: "ongoing" | "completed";
  developer: string;
  numberOfProperties: number;
  images: string[];
  coverImage: string;
}

const LocalizedDataSchema = new Schema<ILocalizedData>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  neighborhood: { type: String },
  services: { type: [String], default: [] },
});

const ProjectSchema = new Schema<IProject>(
  {
    data: {
      en: { type: LocalizedDataSchema, required: true },
      ar: { type: LocalizedDataSchema, required: true },
    },
    startingPrice: { type: Number, required: true },
    area: { type: Number, required: true },
    rooms: { type: Number, required: true },
    baths: { type: Number, required: true },
    floors: { type: Number, required: true },
    status: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
    },
    developer: { type: String, required: true },
    numberOfProperties: { type: Number, required: true },
    images: { type: [String], default: [] },
    coverImage: { type: String, required: true },
  },
  { timestamps: true }
);

const Project = models?.Project || model<IProject>("Project", ProjectSchema);

export default Project;
