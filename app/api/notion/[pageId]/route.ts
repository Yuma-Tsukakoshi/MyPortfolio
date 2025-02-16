import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET(request: Request) {
  try {
    // リクエストURL から pageId を取得
    const url = new URL(request.url);
    const pageId = url.pathname.split("/").pop(); // 最後のパスを取得

    if (!pageId) {
      return NextResponse.json(
        { error: "Page ID is missing" },
        { status: 400 },
      );
    }

    const page = await notion.pages.retrieve({ page_id: pageId });

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch Notion page",
      },
      { status: 500 },
    );
  }
}
