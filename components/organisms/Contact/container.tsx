import { useState } from "react";

import { ContactFormData, ContactInfo } from "@/types/contact";

import { ContactPresentation } from "./presentation";

export const Contact = () => {
  // TODO: APIからデータを取得する処理を実装
  const contactInfo: ContactInfo = {
    email: "example@example.com",
    phone: "090-1234-5678",
    location: "東京都渋谷区",
    socialLinks: {
      github: "https://github.com/example",
      linkedin: "https://linkedin.com/in/example",
      twitter: "https://twitter.com/example",
    },
  };

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // TODO: フォーム送信処理を実装
    console.log("送信データ:", formData);
  };

  return (
    <ContactPresentation
      contactInfo={contactInfo}
      formData={formData}
      onFormChange={handleFormChange}
      onSubmit={handleSubmit}
    />
  );
};
