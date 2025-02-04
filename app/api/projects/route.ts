import { NextResponse } from "next/server";

import Project from "@/database/project.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { ProjectSchema } from "@/lib/validations";

// export async function GET() {
//   try {
//     await dbConnect();
//     const projects = await Project.find();
//     return NextResponse.json(
//       { success: true, data: projects },
//       { status: 200 }
//     );
//   } catch (error) {
//     return handleError(error, "api") as APIErrorResponse;
//   }
// }

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find();
    return NextResponse.json(
      { success: true, data: projects },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred" },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse and validate the incoming data
    const body = await request.json();
    const validatedData = ProjectSchema.safeParse(body);
    if (!validatedData.success) {
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    }

    // Destructure the validated data
    const {
      data,
      startingPrice,
      area,
      rooms,
      baths,
      floors,
      status,
      developer,
      numberOfProperties,
      images,
      coverImage,
    } = validatedData.data;

    // Create and save the project in the database
    const project = new Project({
      data,
      startingPrice,
      area,
      rooms,
      baths,
      floors,
      status,
      developer,
      numberOfProperties,
      images,
      coverImage,
    });

    await project.save();

    // Return a success response
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    // Handle errors and return appropriate response
    return handleError(error, "api") as APIErrorResponse;
  }
}
