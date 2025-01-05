import { model, models, Schema } from "mongoose";

export interface ILead {
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: "new" | "contacted";
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "contacted"],
      default: "new",
    },
  },
  { timestamps: true }
);

const Lead = models?.Lead || model<ILead>("Lead", LeadSchema);

export default Lead;
