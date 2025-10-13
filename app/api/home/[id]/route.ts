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
    if (!todo) {
      return NextResponse.json({ success: false, message: "todo tapilmadi" });
    } else {
      return NextResponse.json({ success: true, todo });
    }
  } catch {
    return NextResponse.json(
      { message: "zehmet olmasa duzgun todo secin" },
      { status: 404 }
    );
  }
}

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  await ConnectDb();
  try {
    const todo = await TodoModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "todo silindi", todo });
  } catch {
    return NextResponse.json(
      { message: "Zehmet olmasa duzgun todo secin.a" },
      { status: 404 }
    );
  }
};
