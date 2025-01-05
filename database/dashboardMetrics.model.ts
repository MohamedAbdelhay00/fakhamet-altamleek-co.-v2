import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDashboardMetrics extends Document {
  totalProjects: number;
  soldProperties: number;
  leads: number;
  revenue: number;
  projectStatus: {
    ongoing: number;
    completed: number;
  };
  recentActivities: { title: string; updatedAt: Date }[];
}

const DashboardMetricsSchema: Schema = new Schema(
  {
    totalProjects: { type: Number, required: true },
    soldProperties: { type: Number, required: true },
    leads: { type: Number, required: true },
    revenue: { type: Number, required: true },
    projectStatus: {
      ongoing: { type: Number, required: true },
      completed: { type: Number, required: true },
    },
    recentActivities: [
      {
        title: { type: String, required: true },
        updatedAt: { type: Date, required: true },
      },
    ],
  },
  { timestamps: true }
);

const DashboardMetrics: Model<IDashboardMetrics> =
  mongoose.models.DashboardMetrics ||
  mongoose.model<IDashboardMetrics>("DashboardMetrics", DashboardMetricsSchema);

export default DashboardMetrics;
