export interface CareerEvent {
  title: string;
  company: string;
  period: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface CareerData {
  title: string;
  subtitle: string;
  events: CareerEvent[];
  education: Education;
  certifications: Certification[];
}
