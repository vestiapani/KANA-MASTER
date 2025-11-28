import Navigation from "@/components/Navigation";
import StoryCard from "@/components/StoryCard";
import { storiesData } from "@/data/storiesData";
import { Badge } from "@/components/ui/badge";
import { BookText, Sparkles } from "lucide-react";

const Stories = () => {
  const beginnerStories = storiesData.filter((s) => s.level === "beginner");
  const intermediateStories = storiesData.filter(
    (s) => s.level === "intermediate"
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Reading Stories
              </h1>
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practice reading Japanese with short stories in hiragana and
              katakana
            </p>
          </div>

          {/* Beginner Stories */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Beginner Level
              </h2>
              <Badge variant="default" className="text-sm">
                初級
              </Badge>
            </div>
            <div className="space-y-6">
              {beginnerStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          {/* Intermediate Stories */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Intermediate Level
              </h2>
              <Badge variant="secondary" className="text-sm">
                中級
              </Badge>
            </div>
            <div className="space-y-6">
              {intermediateStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-card rounded-xl shadow-soft border border-border/50">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Reading Tips
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Read through the Japanese text first without looking at the
                  translation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Try to understand the context and main ideas before checking
                  the translation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Read the story multiple times to improve fluency and
                  comprehension
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Practice reading aloud to improve your pronunciation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stories;
