"use client";

import { Loader, Modal, Text } from "@mantine/core";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { useEffect, useState } from "react";

import NotionRender from "@/components/notion/NotionRender";

type NotionResponse = {
  page: PageObjectResponse;
  blocks: BlockObjectResponse[];
};

export default function NotionDialog({
  pageId,
  onClose,
}: {
  pageId: string | null;
  onClose: () => void;
}) {
  const [pageData, setPageData] = useState<NotionResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pageId) {
      setLoading(true);
      setError(null);
      fetch(`/api/notion/${pageId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch data");
          return res.json();
        })
        .then((data: NotionResponse) => setPageData(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [pageId]);

  const getTitle = () => {
    if (!pageData) return "No Data";
    const page = pageData.page;
    if ("properties" in page) {
      for (const prp of Object.values(page.properties)) {
        if (prp.type === "title" && prp.title.length > 0) {
          return prp.title[0].plain_text;
        }
      }
    }
    return "Untitled Page";
  };

  return (
    <Modal
      opened={!!pageId}
      onClose={onClose}
      size="xl"
      title={getTitle()}
      centered
      overlayProps={{
        opacity: 0.3,
        blur: 3,
        color: "#1a73e8",
      }}
      styles={{
        title: {
          color: "#202124",
          fontSize: "1.5rem",
          fontWeight: 500,
        },
        header: {
          borderBottom: "1px solid #e8eaed",
          padding: "1rem 1.5rem",
        },
        body: {
          padding: "1.5rem",
        },
      }}
    >
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <Loader size="md" color="#1a73e8" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-[70vh]">
          <Text c="red" size="lg">
            {error}
          </Text>
        </div>
      ) : pageData ? (
        <div className="w-full h-[70vh] overflow-y-auto">
          <NotionRender blocks={pageData.blocks} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <Text c="#5f6368" size="lg">
            データが取得できませんでした。
          </Text>
        </div>
      )}
    </Modal>
  );
}
