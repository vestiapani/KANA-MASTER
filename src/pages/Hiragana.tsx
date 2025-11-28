import Navigation from "@/components/Navigation";
import KanaCard from "@/components/KanaCard";
import { hiraganaData } from "@/data/hiraganaData";

const Hiragana = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Hiragana
              <span className="block text-2xl sm:text-3xl text-muted-foreground mt-2">
                ひらがな
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hover or tap on each character to see its pronunciation
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2 sm:gap-4 animate-fade-in">
            {hiraganaData.map((kana, index) =>
              kana.character ? (
                <KanaCard
                  key={index}
                  character={kana.character}
                  romaji={kana.romaji}
                />
              ) : (
                <div key={index} className="aspect-square" />
              )
            )}
          </div>

          <div className="mt-12 p-6 bg-card rounded-xl shadow-soft border border-border/50">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              About Hiragana
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Hiragana is one of the two syllabaries used in the Japanese
              writing system. It consists of 46 basic characters and is
              primarily used for native Japanese words, grammatical particles,
              and verb endings. Mastering hiragana is the first essential step
              in learning to read and write Japanese.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hiragana;
