import { Hobby } from "@/types/about";

interface HobbyItemProps {
  hobby: Hobby;
}

export const HobbyItem = ({ hobby }: HobbyItemProps) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
      <span className="text-2xl">{hobby.icon}</span>
      <span className="text-gray-700">{hobby.label}</span>
    </div>
  );
};
