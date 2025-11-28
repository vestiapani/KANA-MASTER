import { useState } from "react";
import { Card } from "@/components/ui/card";
import { KanjiData } from "@/data/kanjiData";

interface KanjiCardProps {
  kanji: KanjiData;
}

const KanjiCard = ({ kanji }: KanjiCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card
      className="relative p-4 sm:p-6 cursor-pointer bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="text-5xl sm:text-6xl font-bold text-foreground group-hover:text-primary transition-colors">
          {kanji.character}
        </div>

        <div
          className={`text-center transition-all duration-300 ${
            showDetails ? "opacity-100 max-h-96" : "opacity-50 max-h-20"
          }`}
        >
          <div className="text-lg font-semibold text-primary mb-2">
            {kanji.meaning}
          </div>

          {showDetails && (
            <div className="space-y-2 animate-fade-in">
              <div className="text-sm">
                <span className="font-medium text-muted-foreground">
                  On'yomi:
                </span>
                <span className="ml-2 text-foreground">{kanji.onyomi}</span>
              </div>
              <div className="text-sm">
                <span className="font-medium text-muted-foreground">
                  Kun'yomi:
                </span>
                <span className="ml-2 text-foreground">{kanji.kunyomi}</span>
              </div>
              <div className="pt-2 border-t border-border/50">
                <div className="font-medium text-sm text-muted-foreground mb-1">
                  Examples:
                </div>
                {kanji.examples.map((example, idx) => (
                  <div key={idx} className="text-xs text-foreground/80">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default KanjiCard;
