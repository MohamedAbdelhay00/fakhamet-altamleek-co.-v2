import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose"; // Ensure you have a helper to connect to MongoDB
import DashboardModel from "@/database/dashboardMetrics.model"; // Dashboard schema model

// GET route: Fetch data from the database
export async function GET(request: NextRequest) {
  try {
    // Connect to the database
    const db = await dbConnect();

    // Retrieve dashboard data
    const dashboardData = await DashboardModel.findOne();

    // Return data if found
    if (dashboardData) {
      return NextResponse.json({ data: dashboardData }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "No dashboard data found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}

// POST route: Add or update dashboard data
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();

    // Validate input (optional, add as needed)
    if (!body) {
      throw new Error("Invalid request body");
    }

    // Connect to the database
    const db = await dbConnect();

    // Upsert data (update if exists, insert if not)
    const result = await DashboardModel.findOneAndUpdate(
      {}, // No filter to update the first document
      body,
      { upsert: true, new: true }
    );

    // Return success message
    return NextResponse.json(
      { message: "Data saved successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving dashboard data:", error);
    return NextResponse.json(
      { error: "Failed to save dashboard data" },
      { status: 400 }
    );
  }
}
