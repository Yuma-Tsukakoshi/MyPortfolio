import { NextResponse } from "next/server";

import { ApiResponse } from "@/types/api";
import { ContactData } from "@/types/contact";

export async function GET(): Promise<NextResponse<ApiResponse<ContactData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: ContactData = {
    title: "Contact",
    subtitle: "お問い合わせ",
    description: "お仕事のご依頼やご質問など、お気軽にお問い合わせください。",
    form: {
      fields: [
        {
          name: "name",
          label: "お名前",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "メールアドレス",
          type: "email",
          required: true,
        },
        {
          name: "subject",
          label: "件名",
          type: "text",
          required: true,
        },
        {
          name: "message",
          label: "メッセージ",
          type: "textarea",
          required: true,
        },
      ],
      submitButton: {
        label: "送信する",
      },
    },
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/username",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/username",
        icon: "linkedin",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/username",
        icon: "twitter",
      },
    ],
  };

  return NextResponse.json({
    data,
    status: 200,
    message: "Success",
  });
}

export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse<null>>> {
  const _body = await request.json();
  // TODO: フォームデータのバリデーションと保存処理を実装

  return NextResponse.json({
    data: null,
    status: 200,
    message: "メッセージを送信しました。",
  });
}
