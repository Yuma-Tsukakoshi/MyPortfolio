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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {(() => {
        switch (block.type) {
          case "paragraph":
            return (
              <p className="text-base leading-relaxed mb-6 text-[#5f6368]">
                {block.paragraph.rich_text.map(
                  (t: RichTextItemResponse, idx: number) => (
                    <span
                      key={idx}
                      style={{
                        fontWeight: t.annotations.bold ? 600 : 400,
                        fontStyle: t.annotations.italic ? "italic" : "normal",
                        textDecoration: t.annotations.underline
                          ? "underline"
                          : "none",
                        color:
                          t.annotations.color !== "default"
                            ? `var(--${t.annotations.color})`
                            : "#5f6368",
                      }}
                    >
                      {t.plain_text}
                    </span>
                  ),
                )}
              </p>
            );

          case "heading_1":
            return (
              <h1 className="text-3xl font-medium mb-6 text-[#202124]">
                {block.heading_1.rich_text[0]?.plain_text}
              </h1>
            );

          case "heading_2":
            return (
              <h2 className="text-2xl font-medium mb-4 text-[#202124]">
                {block.heading_2.rich_text[0]?.plain_text}
              </h2>
            );

          case "heading_3":
            return (
              <h3 className="text-xl font-medium mb-3 text-[#202124]">
                {block.heading_3.rich_text[0]?.plain_text}
              </h3>
            );

          case "bulleted_list_item":
            return (
              <ul className="list-disc ml-6 mb-4 text-[#5f6368]">
                <li className="mb-2">
                  {block.bulleted_list_item.rich_text[0]?.plain_text}
                </li>
              </ul>
            );

          case "numbered_list_item":
            return (
              <ol className="list-decimal ml-6 mb-4 text-[#5f6368]">
                <li className="mb-2">
                  {block.numbered_list_item.rich_text[0]?.plain_text}
                </li>
              </ol>
            );

          case "to_do":
            return (
              <div className="flex items-start gap-3 mb-4">
                <input
                  type="checkbox"
                  checked={block.to_do.checked}
                  className="h-5 w-5 mt-1 accent-[#1a73e8]"
                  readOnly
                />
                <span className="text-[#5f6368]">
                  {block.to_do.rich_text[0]?.plain_text}
                </span>
              </div>
            );

          case "image":
            const imageUrl =
              "external" in block.image
                ? block.image.external.url
                : block.image.file.url;
            return (
              imageUrl && (
                <div className="my-6 rounded-lg overflow-hidden shadow-sm border border-[#e8eaed]">
                  <Image
                    src={imageUrl}
                    alt="Notion Image"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              )
            );

          case "code":
            return (
              <div className="my-6 rounded-lg overflow-hidden border border-[#e8eaed]">
                <CodeBlock
                  text={block.code.rich_text[0]?.plain_text}
                  language={block.code.language}
                  theme={dracula}
                  customStyle={{
                    padding: "1rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                  }}
                />
              </div>
            );

          case "quote":
            return (
              <blockquote className="border-l-4 border-[#1a73e8] pl-4 italic text-[#5f6368] my-6 bg-[#f8f9fa] p-4 rounded-r-lg">
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
    <div className="max-w-3xl mx-auto py-8 px-6 bg-white rounded-lg">
      {blocks.map((block) => (
        <NotionBlock key={block.id} block={block} />
      ))}
    </div>
  );
};

export default NotionRender;
