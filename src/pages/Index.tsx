import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Circle,
  Square,
  ArrowRight,
  Sparkles,
  Languages,
  BookText,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-36 h-36 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground animate-scale-in">
                Kana Master
              </h1>
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master Japanese Hiragana and Katakana with our beautiful,
              interactive learning platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/hiragana">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Circle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Learn Hiragana
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/katakana">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                >
                  <Square className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Learn Katakana
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Circle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Hiragana
              </h3>
              <p className="text-muted-foreground">
                Learn all 46 basic hiragana characters with interactive cards
              </p>
            </div>

            <div
              className="bg-card p-6 sm:p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Square className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Katakana
              </h3>
              <p className="text-muted-foreground">
                Master all 46 katakana characters for modern Japanese
              </p>
            </div>

            <div
              className="bg-card p-6 sm:p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Languages className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Basic Kanji
              </h3>
              <p className="text-muted-foreground">
                Learn essential kanji with meanings, readings, and examples
              </p>
            </div>

            <div
              className="bg-card p-6 sm:p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BookText className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Reading Stories
              </h3>
              <p className="text-muted-foreground">
                Practice with short stories in hiragana and katakana
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto text-center bg-gradient-card p-8 sm:p-12 rounded-3xl shadow-elegant border border-primary/20 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Start Your Japanese Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Begin mastering the fundamentals of Japanese writing with our
              intuitive learning tools
            </p>
            <Link to="/hiragana">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
