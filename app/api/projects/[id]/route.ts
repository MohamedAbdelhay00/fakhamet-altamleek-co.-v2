import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

import Project from "@/database/project.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { ProjectSchema } from "@/lib/validations";

// GET by ID
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    console.log("Params received:", params);
    const { id } = await params;

    // Validate Project ID
    if (!id || !Types.ObjectId.isValid(id)) {
      throw new NotFoundError("Invalid Project ID");
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log("Request body received:", body); // Debugging
    } catch (error) {
      console.error("Invalid JSON in request body:", error);
      return NextResponse.json(
        { success: false, error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Validate the incoming data
    const validatedData = ProjectSchema.safeParse(body);
    if (!validatedData.success) {
      console.error(
        "Validation Errors:",
        validatedData.error.flatten().fieldErrors
      );
      return NextResponse.json(
        { success: false, errors: validatedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Update the project
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      validatedData.data,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      console.error("Project not found for ID:", id);
      throw new NotFoundError("Project");
    }

    console.log("Updated project:", updatedProject); // Debugging
    return NextResponse.json(
      { success: true, data: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PUT request:", error);
    return handleError(error, "api") as APIErrorResponse;
  }
}

// DELETE by ID
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) throw new NotFoundError("Project");
  try {
    await dbConnect();

    const project = await Project.findByIdAndDelete(id);
    if (!project) throw new NotFoundError("Project");

    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
