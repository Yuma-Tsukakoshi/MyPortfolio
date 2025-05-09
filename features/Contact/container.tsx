"use client";

import { useEffect, useState } from "react";

import { ContactData } from "@/types/contact";

import { Contact } from "./presentation";

export const ContactContainer = () => {
  const [contact, setContact] = useState<ContactData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch("/api/contact");
        if (!response.ok) {
          throw new Error("Failed to fetch contact data");
        }
        const result = await response.json();
        setContact(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();
  }, []);

  return <Contact contact={contact} error={error} isLoading={isLoading} />;
};
