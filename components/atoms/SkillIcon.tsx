import Image from "next/image";

import { Skill } from "@/types/skills";

interface SkillIconProps {
  skill: Skill;
  size?: number;
}

export const SkillIcon = ({ skill, size = 80 }: SkillIconProps) => {
  const iconClass = `rounded-xl bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200`;

  return (
    <div className={iconClass} style={{ width: size, height: size }}>
      <Image
        src={skill.image}
        alt={skill.label}
        width={size - 20}
        height={size - 20}
        className="object-contain"
        unoptimized
      />
    </div>
  );
};
