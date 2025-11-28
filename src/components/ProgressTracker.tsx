import React from "react";
import type { WordProgress } from "../utils/progress";

export default function ProgressTracker({
  progressData,
  total,
}: {
  progressData: Record<string, WordProgress>;
  total: number;
}) {
  const reviewed = Object.keys(progressData).length;
  const known = Object.values(progressData).filter((p) => p.box >= 3).length;

  const percent = Math.round((known / total) * 100);

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 shadow rounded mb-6">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-500">Progress</div>
          <div className="text-xl font-semibold">{percent}% mastered</div>
          <div className="text-sm text-gray-500">
            {reviewed} reviewed · {total} total
          </div>
        </div>

        <div className="w-40 bg-gray-200 rounded h-4">
          <div
            className="h-4 bg-green-500 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
