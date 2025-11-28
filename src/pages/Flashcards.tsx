import React from "react";
import Navigation from "@/components/Navigation";
import FlashcardDeck from "../components/FlashcardDeck";
import { kanaCards } from "../data/cards";

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Flashcards
              <span className="block text-2xl sm:text-3xl text-muted-foreground mt-2">
                Kana Practice
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tap to flip each card and test your Kana reading skills.
            </p>
          </div>

          <FlashcardDeck
            cards={kanaCards.map((c) => ({
              kana: c.term,
              romaji: c.reading,
            }))}
          />
        </div>
      </main>
    </div>
  );
}
