import React from "react";
import PronunciationButton from "./PronunciationButton";
import { updateProgressFor } from "../utils/progress";

type Card = {
  id: string;
  term: string; // ひらがな / カタカナ
  reading?: string; // romaji
  meaning?: string; // arti
  image?: string;
};

export default function Flashcard({
  card,
  onAnswer,
}: {
  card: Card;
  onAnswer: (id: string, correct: boolean) => void;
}) {
  const [show, setShow] = React.useState(false);

  const mark = (correct: boolean) => {
    updateProgressFor(card.id, correct);
    onAnswer(card.id, correct);
    setShow(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 shadow p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">{card.term}</h1>
        <PronunciationButton text={card.term} />
      </div>

      {card.image && (
        <img
          src={card.image}
          alt={card.term}
          className="mx-auto mt-4 h-32 object-contain"
        />
      )}

      {!show ? (
        <button
          onClick={() => setShow(true)}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Show Answer
        </button>
      ) : (
        <div className="mt-4">
          <p className="text-lg">
            <strong>Reading:</strong> {card.reading}
          </p>
          <p className="text-lg">
            <strong>Meaning:</strong> {card.meaning}
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => mark(true)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              I Know ✓
            </button>
            <button
              onClick={() => mark(false)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              I Don’t Know ✕
            </button>
          </div>

          <button
            onClick={() => setShow(false)}
            className="mt-3 px-3 py-1 border rounded"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
