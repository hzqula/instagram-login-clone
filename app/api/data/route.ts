// app/api/korban/route.ts
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const korban = await sql`SELECT username, password FROM korban;`;
    return NextResponse.json(korban.rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, ucapan } = body;

    // Validasi input
    if (!username || !password || !ucapan) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    await sql`INSERT INTO korban (username, password, ucapan) VALUES (${username}, ${password}, ${ucapan});`;

    return NextResponse.json(
      { message: "Data berhasil disimpan" },
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
