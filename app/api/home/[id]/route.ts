import ConnectDb from "@/lib/dbConnect";
import { TodoModel } from "@/models/todo";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  await ConnectDb();
  try {
    const todo = await TodoModel.findById(id);
    return NextResponse.json({ success: true, todo });
  } catch {
    return NextResponse.json(
      { message: "zehmet olmasa duzgun todo secim" },
      { status: 404 }
    );
  }
}
