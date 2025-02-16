"use client";

import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

type NotionBlockProps = {
  block: BlockObjectResponse;
};

const NotionBlock: React.FC<NotionBlockProps> = ({ block }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {(() => {
        switch (block.type) {
          case "paragraph":
            return (
              <p className="text-lg leading-relaxed mb-4 text-gray-800">
                {block.paragraph.rich_text.map(
                  (t: RichTextItemResponse, idx: number) => (
                    <span key={idx}>{t.plain_text}</span>
                  ),
                )}
              </p>
            );

          case "heading_1":
            return (
              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                {block.heading_1.rich_text[0]?.plain_text}
              </h1>
            );

          case "heading_2":
            return (
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {block.heading_2.rich_text[0]?.plain_text}
              </h2>
            );

          case "heading_3":
            return (
              <h3 className="text-xl font-medium mb-3 text-gray-700">
                {block.heading_3.rich_text[0]?.plain_text}
              </h3>
            );

          case "bulleted_list_item":
            return (
              <ul className="list-disc ml-5 mb-3 text-gray-700">
                <li>{block.bulleted_list_item.rich_text[0]?.plain_text}</li>
              </ul>
            );

          case "numbered_list_item":
            return (
              <ol className="list-decimal ml-5 mb-3 text-gray-700">
                <li>{block.numbered_list_item.rich_text[0]?.plain_text}</li>
              </ol>
            );

          case "to_do":
            return (
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="checkbox"
                  checked={block.to_do.checked}
                  className="h-5 w-5 accent-blue-500"
                  readOnly
                />
                <span>{block.to_do.rich_text[0]?.plain_text}</span>
              </div>
            );

          case "image":
            const imageUrl =
              "external" in block.image
                ? block.image.external.url
                : block.image.file.url;
            return (
              imageUrl && (
                <div className="my-4 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={imageUrl}
                    alt="Notion Image"
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              )
            );

          case "code":
            return (
              <div className="my-4 rounded-lg overflow-hidden">
                <CodeBlock
                  text={block.code.rich_text[0]?.plain_text}
                  language={block.code.language}
                  theme={dracula}
                />
              </div>
            );

          case "quote":
            return (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4">
                {block.quote.rich_text[0]?.plain_text}
              </blockquote>
            );

          default:
            return null;
        }
      })()}
    </motion.div>
  );
};

type NotionRenderProps = {
  blocks: BlockObjectResponse[];
};

const NotionRender: React.FC<NotionRenderProps> = ({ blocks }) => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 bg-white shadow-lg rounded-lg">
      {blocks.map((block) => (
        <NotionBlock key={block.id} block={block} />
      ))}
    </div>
  );
};

export default NotionRender;
