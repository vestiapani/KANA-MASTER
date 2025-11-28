import Navigation from "@/components/Navigation";
import KanjiCard from "@/components/KanjiCard";
import { kanjiData } from "@/data/kanjiData";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { useState } from "react";

const Kanji = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredKanji =
    selectedLevel === "all"
      ? kanjiData
      : kanjiData.filter((k) => k.level === selectedLevel);

  const levelCounts = {
    simple: kanjiData.filter((k) => k.level === "simple").length,
    basic: kanjiData.filter((k) => k.level === "basic").length,
    intermediate: kanjiData.filter((k) => k.level === "intermediate").length,
    complex: kanjiData.filter((k) => k.level === "complex").length,
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Kanji
              <span className="block text-2xl sm:text-3xl text-muted-foreground mt-2">
                漢字
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn {kanjiData.length} kanji characters from simple to complex
              with meanings, readings, and examples.
            </p>
          </div>

          {/* Filter Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 mr-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">
                Filter by level:
              </span>
            </div>
            <Badge
              variant={selectedLevel === "all" ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedLevel("all")}
            >
              All ({kanjiData.length})
            </Badge>
            <Badge
              variant={selectedLevel === "simple" ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedLevel("simple")}
            >
              Simple ({levelCounts.simple})
            </Badge>
            <Badge
              variant={selectedLevel === "basic" ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedLevel("basic")}
            >
              Basic ({levelCounts.basic})
            </Badge>
            <Badge
              variant={selectedLevel === "intermediate" ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedLevel("intermediate")}
            >
              Intermediate ({levelCounts.intermediate})
            </Badge>
            <Badge
              variant={selectedLevel === "complex" ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedLevel("complex")}
            >
              Complex ({levelCounts.complex})
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 animate-fade-in">
            {filteredKanji.map((kanji, index) => (
              <KanjiCard key={index} kanji={kanji} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-card rounded-xl shadow-soft border border-border/50">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              About Kanji
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kanji are logographic characters borrowed from Chinese and
                adapted for use in the Japanese writing system. Each kanji
                represents a concept or idea and can have multiple readings.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gradient-card rounded-lg border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">
                    On'yomi (音読み)
                  </h3>
                  <p className="text-sm">
                    Chinese-derived reading, typically used in compound words.
                    Usually written in katakana.
                  </p>
                </div>
                <div className="p-4 bg-gradient-card rounded-lg border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">
                    Kun'yomi (訓読み)
                  </h3>
                  <p className="text-sm">
                    Native Japanese reading, often used when the kanji stands
                    alone. Usually written in hiragana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kanji;
