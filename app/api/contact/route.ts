import { NextResponse } from "next/server";

import { ApiResponse } from "@/types/api";
import { ContactData, ContactFormData } from "@/types/contact";

export async function GET(): Promise<NextResponse<ApiResponse<ContactData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: ContactData = {
    title: "Contact",
    subtitle: "お問い合わせ",
    email: "example@example.com",
    phone: "090-1234-5678",
    location: "東京都渋谷区",
    socialLinks: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
  };

  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}

export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse<null>>> {
  try {
    const _formData: ContactFormData = await request.json();

    // TODO: メール送信やデータベースへの保存処理を実装

    return NextResponse.json({
      status: 200,
      message: "Message sent successfully",
      data: null,
    });
  } catch {
    return NextResponse.json(
      {
        status: 500,
        message: "Failed to send message",
        data: null,
      },
      { status: 500 },
    );
  }
}
