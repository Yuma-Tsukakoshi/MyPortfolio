import Image from "next/image";

import { Certification } from "@/types/career";

interface CertificationBadgeProps {
  certification: Certification;
}

export const CertificationBadge = ({
  certification,
}: CertificationBadgeProps) => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={certification.image}
        alt={certification.alt}
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />
    </div>
  );
};
