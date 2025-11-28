import { useState } from "react";
import { Card } from "@/components/ui/card";

interface KanaCardProps {
  character: string;
  romaji: string;
}

const KanaCard = ({ character, romaji }: KanaCardProps) => {
  const [showRomaji, setShowRomaji] = useState(false);

  return (
    <Card
      className="relative aspect-square flex flex-col items-center justify-center cursor-pointer bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
      onMouseEnter={() => setShowRomaji(true)}
      onMouseLeave={() => setShowRomaji(false)}
      onClick={() => setShowRomaji(!showRomaji)}
    >
      <div className="text-3xl sm:text-4xl font-medium text-foreground group-hover:text-primary transition-colors">
        {character}
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center bg-primary/95 backdrop-blur-sm rounded-lg transition-opacity duration-300 ${
          showRomaji ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-2xl sm:text-3xl font-semibold text-primary-foreground">
          {romaji}
        </span>
      </div>
    </Card>
  );
};

export default KanaCard;
