import React from "react";

export default function PronunciationButton({ text }: { text: string }) {
  const speak = () => {
    if (!("speechSynthesis" in window)) {
      alert("Speech Synthesis not supported in this browser");
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP"; // Bahasa Jepang
    utter.rate = 0.9; // Sedikit pelan agar jelas
    utter.pitch = 1.1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  return (
    <button
      onClick={speak}
      className="px-3 py-1 rounded border bg-white dark:bg-zinc-800 hover:bg-gray-50 shadow-sm"
    >
      🔊 Pronounce
    </button>
  );
}
