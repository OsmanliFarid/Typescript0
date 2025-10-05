import ConnectDb from "@/lib/dbConnect";
import { TodoModel } from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDb();
    const Todo = await TodoModel.find();
    return NextResponse.json({ Todo });
  } catch {
    return NextResponse.json("xeta var");
  }
}
export async function POST(req: NextRequest) {
  await ConnectDb();
  try {
    const body = await req.json();
    if (typeof body.text === "string" && typeof body.checkbox === "boolean") {
      const createdTodo = await TodoModel.create(body);

      return NextResponse.json(createdTodo, { status: 201 });
    } else {
      return NextResponse.json(
        { message: "zehmet olmasa xanalari duzgun dolduru" },
        { status: 404 }
      );
    }
  } catch {
    return NextResponse.json({ message: "Xəta baş verdi" }, { status: 500 });
  }
}
