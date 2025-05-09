export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
