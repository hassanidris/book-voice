"use client";

import React from "react";

type Props = {
  title?: string;
};

export default function LoadingOverlay({
  title = "Preparing synthesis...",
}: Props) {
  return (
    <div className="loading-wrapper" role="status" aria-live="polite">
      <div className="loading-shadow-wrapper">
        <div className="loading-shadow bg-white p-6 rounded-xl">
          <svg
            className="loading-animation text-[#663820] w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="2"
              stroke="currentColor"
              strokeOpacity="0.15"
            />
            <path
              d="M22 12a10 10 0 00-10-10"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="loading-title mt-4 text-center">{title}</div>
          <div className="loading-progress mt-4">
            <div className="loading-progress-item">
              <span className="loading-progress-status mr-2" /> Preparing files
            </div>
            <div className="loading-progress-item">
              <span className="loading-progress-status mr-2" /> Synthesizing
              audio
            </div>
            <div className="loading-progress-item">
              <span className="loading-progress-status mr-2" /> Finalizing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
