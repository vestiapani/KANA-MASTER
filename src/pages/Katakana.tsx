import Navigation from "@/components/Navigation";
import KanaCard from "@/components/KanaCard";
import { katakanaData } from "@/data/katakanaData";

const Katakana = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Katakana
              <span className="block text-2xl sm:text-3xl text-muted-foreground mt-2">
                カタカナ
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hover or tap on each character to see its pronunciation
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2 sm:gap-4 animate-fade-in">
            {katakanaData.map((kana, index) =>
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
              About Katakana
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Katakana is the second syllabary in the Japanese writing system.
              Like hiragana, it consists of 46 basic characters, but it's
              primarily used for foreign loanwords, onomatopoeia, technical
              terms, and emphasis. Learning katakana is essential for reading
              modern Japanese texts and understanding borrowed words from other
              languages.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Katakana;
