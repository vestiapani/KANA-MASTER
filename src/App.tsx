import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Index from "./pages/Index";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Kanji from "./pages/Kanji";
import Stories from "./pages/Stories";
import NotFound from "./pages/NotFound";

import FlashcardsPage from "./pages/Flashcards";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
            <Route path="/kanji" element={<Kanji />} />
            <Route path="/stories" element={<Stories />} />

            <Route path="/flashcards" element={<FlashcardsPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
