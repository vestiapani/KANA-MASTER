import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Card {
  kana: string;
  romaji: string;
  meaning?: string;
}

interface Props {
  cards: Card[];
}

const FlashcardDeck: React.FC<Props> = ({ cards }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("kana-progress");
    if (saved) {
      const value = Number(saved);
      setProgress(value);
      setIndex(Math.floor((value / 100) * cards.length));
    }
  }, []);

  // Save progress
  useEffect(() => {
    const percent = Math.round(((index + 1) / cards.length) * 100);
    setProgress(percent);
    localStorage.setItem("kana-progress", String(percent));
  }, [index]);

  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFlipped(false);
    }
  };

  const speakRomaji = () => {
    const utter = new SpeechSynthesisUtterance(cards[index].romaji);
    utter.lang = "ja-JP"; // Pronunciation Jepang
    window.speechSynthesis.speak(utter);
  };

  const speakKana = () => {
    const utter = new SpeechSynthesisUtterance(cards[index].kana);
    utter.lang = "ja-JP";
    window.speechSynthesis.speak(utter);
  };

  return (
    <div className="w-full max-w-md mx-auto text-center">
      {/* PROGRESS BAR */}
      <Progress value={progress} className="mb-4" />

      {/* FLASHCARD */}
      <div
        className={`w-full h-48 flex items-center justify-center rounded-xl shadow-lg cursor-pointer transition-all duration-300 bg-card text-card-foreground`}
        onClick={() => setFlipped(!flipped)}
      >
        {!flipped ? (
          <span className="text-6xl font-bold">{cards[index].kana}</span>
        ) : (
          <div>
            <p className="text-3xl font-semibold">{cards[index].romaji}</p>
            {cards[index].meaning && (
              <p className="text-lg opacity-70 mt-2">{cards[index].meaning}</p>
            )}
          </div>
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-4">
        <Button onClick={prevCard} disabled={index === 0}>
          Previous
        </Button>
        <Button onClick={nextCard} disabled={index === cards.length - 1}>
          Next
        </Button>
      </div>

      {/* AUDIO BUTTONS */}
      <div className="flex justify-center gap-4 mt-4">
        <Button variant="secondary" onClick={speakKana}>
          🔊 Pronounce Kana
        </Button>
        <Button variant="secondary" onClick={speakRomaji}>
          🔊 Pronounce Romaji
        </Button>
      </div>

      <p className="text-sm opacity-60 mt-3">
        Progress: {progress}% ({index + 1}/{cards.length})
      </p>
    </div>
  );
};

export default FlashcardDeck;
