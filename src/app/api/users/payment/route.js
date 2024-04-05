import User from "@/DB/Model/userModel";
import { NextResponse } from "next/server";
const { dbConnect } = require("@/DB/dbconnect");

dbConnect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, number, courses, status } = reqBody;
    console.log(reqBody);

    const user = await User.findOneAndUpdate(
      { email },
      { number, courses, status }
    );
    const savedUser = await user.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 },
      savedUser
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const requestData = await request.json();

    console.log("requestData :", requestData);
    // Check if request data is empty or malformed
    if (!requestData || typeof requestData !== "object") {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const { id } = requestData;

    // Find the user by id
    const user = await User.findById(id);
    console.log("user :", user);

    // If user not found, return error response
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update user's status to "success"
    user.status = "success";

    // Save the updated user
    const updatedUser = await user.save();

    console.log("updatedUser :", updatedUser);
    return NextResponse.json({
      message: "User status updated successfully",
      success: true,
      user: updatedUser
    });
  } catch (error) {
    console.error("Error updating user status:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
