"use client";

import { Loader, Modal, Text } from "@mantine/core";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { useEffect, useState } from "react";

export default function NotionDialog({
  pageId,
  onClose,
}: {
  pageId: string | null;
  onClose: () => void;
}) {
  const [pageData, setPageData] = useState<PageObjectResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (pageId) {
      setLoading(true);
      fetch(`/api/notion/${pageId}`)
        .then((res) => res.json())
        .then((data) => setPageData(data))
        .finally(() => setLoading(false));
    }
  }, [pageId]);

  return (
    <Modal
      opened={!!pageId}
      onClose={onClose}
      size="xl"
      title="Notion Page"
      centered
      overlayProps={{ opacity: 0.3, blur: 3 }}
    >
      {loading ? (
        <Loader size="sm" />
      ) : pageData ? (
        <div className="w-full h-[70vh]">
          <h1>{pageData?.properties?.Name?.title?.[0]?.plain_text}</h1>
        </div>
      ) : (
        <Text>データが取得できませんでした。</Text>
      )}
    </Modal>
  );
}
