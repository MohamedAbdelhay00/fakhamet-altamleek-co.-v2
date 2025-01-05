import Project from "@/database/project.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { ProjectSchema } from "@/lib/validations";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

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

// PUT (Update by ID)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    if (!id) throw new NotFoundError("Project");

    const body = await request.json();

    // Validate the incoming data
    const validatedData = ProjectSchema.safeParse(body);
    if (!validatedData.success) {
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    }

    // Update the project
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      validatedData.data,
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure validators run on update
      }
    );

    if (!updatedProject) throw new NotFoundError("Project");

    return NextResponse.json(
      { success: true, data: updatedProject },
      { status: 200 }
    );
  } catch (error) {
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
