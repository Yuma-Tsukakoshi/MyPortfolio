export interface CareerEvent {
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface Certification {
  name: string;
  image: string;
  alt: string;
}

export interface CareerData {
  events: CareerEvent[];
  education: string;
  graduationYear: string;
  certifications: Certification[];
}
