import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { LoginCredentials } from "@/types/auth";
export async function POST(request: Request) {
  try {
    const body: LoginCredentials = await request.json();

    console.log("Login credentials:", body);
    // 認証成功時
    const user = {
      id: "1",
      email: "test@example.jp",
      password: "password123", // 本来はハッシュ化されたパスワード
      name: "John Doe",
    };

    // 認証情報と合致しているかをチェック

    // セッションクッキーを設定
    const cookieStore = await cookies();
    cookieStore.set("session", "your-session-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1週間
    });

    return NextResponse.json(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }
}
