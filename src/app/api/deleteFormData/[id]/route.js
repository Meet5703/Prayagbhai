import { ContactData } from "@/DB/Model/FetchDataSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const { MONGODB_URI } = process.env;

export async function DELETE(req, res) {
  const { id } = req.params;
  await mongoose.connect(MONGODB_URI);
  const deletedData = await ContactData.findByIdAndDelete(id);
  return NextResponse.json(deletedData);
}
