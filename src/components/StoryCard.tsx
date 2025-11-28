import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Story } from "@/data/storiesData";
import {
  BookOpen,
  Languages,
  ChevronLeft,
  ChevronRight,
  Type,
} from "lucide-react";

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);

  const currentPageData = story.pages[currentPage];
  const totalPages = story.pages.length;

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setShowTranslation(false);
      setShowRomaji(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setShowTranslation(false);
      setShowRomaji(false);
    }
  };

  // Dynamically import the illustration
  const getIllustration = () => {
    try {
      return new URL(`../assets/${story.illustration}.jpg`, import.meta.url)
        .href;
    } catch {
      return "";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-elegant transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {story.titleJapanese}
          </h3>
          <p className="text-lg text-muted-foreground">{story.title}</p>
        </div>
        <div className="flex gap-2">
          <Badge variant={story.level === "beginner" ? "default" : "secondary"}>
            {story.level}
          </Badge>
          <Badge variant="outline">{story.script}</Badge>
        </div>
      </div>

      {/* Illustration */}
      {story.illustration && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={getIllustration()}
            alt={story.title}
            className="w-full h-48 sm:h-64 object-cover"
          />
        </div>
      )}

      {/* Page Counter */}
      <div className="text-center mb-3">
        <span className="text-sm text-muted-foreground">
          Page {currentPage + 1} of {totalPages}
        </span>
      </div>

      {/* Story Content */}
      <div className="mb-4 p-4 bg-background/50 rounded-lg leading-relaxed min-h-[120px]">
        <p className="text-foreground text-base sm:text-lg whitespace-pre-wrap mb-3">
          {currentPageData.content}
        </p>

        {showRomaji && (
          <div className="mt-3 pt-3 border-t border-border/30">
            <p className="text-primary/80 text-sm sm:text-base italic">
              {currentPageData.romaji}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-2 mb-3">
        <Button
          variant="outline"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="flex-1"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="flex-1"
        >
          Next
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-2">
        <Button
          variant={showRomaji ? "default" : "outline"}
          onClick={() => setShowRomaji(!showRomaji)}
          className="flex-1"
        >
          <Type className="mr-2 h-4 w-4" />
          {showRomaji ? "Hide" : "Show"} Romaji
        </Button>
        <Button
          variant={showTranslation ? "default" : "outline"}
          onClick={() => setShowTranslation(!showTranslation)}
          className="flex-1"
        >
          <Languages className="mr-2 h-4 w-4" />
          {showTranslation ? "Hide" : "Show"} Translation
        </Button>
      </div>

      {/* Translation */}
      {showTranslation && (
        <div className="mt-4 p-4 bg-accent/30 rounded-lg border border-primary/20 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="font-semibold text-sm text-primary">
              English Translation
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {currentPageData.translation}
          </p>
        </div>
      )}
    </Card>
  );
};

export default StoryCard;
