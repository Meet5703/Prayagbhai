import { ContactData } from "@/DB/Model/FetchDataSchema";
import dbConnect from "@/DB/dbconnect";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function DELETE(req, res) {
  const id = new NextRequest(req).nextUrl.searchParams.get("id");

  try {
    // Check if the id is a valid ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({
        msg: "Invalid id format",
        success: false
      });
    }

    await dbConnect();
    const deletedData = await ContactData.findByIdAndDelete(id);

    if (!deletedData) {
      return NextResponse.json({
        msg: "Data not found",
        success: false
      });
    }

    return NextResponse.json({
      msg: "Data deleted successfully",
      success: true
    });
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json({
      msg: "Failed to delete data",
      success: false
    });
  }
}
