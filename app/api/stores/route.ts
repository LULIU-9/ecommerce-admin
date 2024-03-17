import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const { name } = body;
    if (!name)
      return new NextResponse("Name can not be empty", { status: 400 });

    const storeData = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(storeData);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Interal error", { status: 500 });
  }
}
