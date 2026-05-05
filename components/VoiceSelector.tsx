"use client";

import React, { useState } from "react";
import { voiceCategories, voiceOptions } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface VoiceSelectorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const VoiceSelector = ({
  value,
  onChange,
  disabled,
  className,
}: VoiceSelectorProps) => {
  // Determine initial gender based on voice value
  const getInitialGender = () => {
    if (voiceCategories.male.includes(value)) return "male";
    return "female";
  };

  const [selectedGender, setSelectedGender] = useState<"male" | "female">(
    getInitialGender(),
  );

  const currentVoices =
    selectedGender === "male" ? voiceCategories.male : voiceCategories.female;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Gender Selector - Male/Female Toggle */}
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={selectedGender === "male"}
              onChange={() => {
                setSelectedGender("male");
                // Auto-select first male voice if current voice is female
                if (!voiceCategories.male.includes(value)) {
                  onChange(voiceCategories.male[0]);
                }
              }}
              disabled={disabled}
              className="hidden"
            />
            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                selectedGender === "male"
                  ? "border-[#663820] bg-[#f3e4c7]"
                  : "border-gray-300 bg-white",
              )}
            >
              {selectedGender === "male" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#663820]" />
              )}
            </div>
          </div>
          <span className="font-semibold text-[#212a3b]">Male</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={selectedGender === "female"}
              onChange={() => {
                setSelectedGender("female");
                // Auto-select first female voice if current voice is male
                if (!voiceCategories.female.includes(value)) {
                  onChange(voiceCategories.female[0]);
                }
              }}
              disabled={disabled}
              className="hidden"
            />
            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                selectedGender === "female"
                  ? "border-[#663820] bg-[#f3e4c7]"
                  : "border-gray-300 bg-white",
              )}
            >
              {selectedGender === "female" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#663820]" />
              )}
            </div>
          </div>
          <span className="font-semibold text-[#212a3b]">Female</span>
        </label>
      </div>

      {/* Voice Options for Selected Gender */}
      <div className="voice-selector-options">
        {currentVoices.map((voiceId) => {
          const voice = voiceOptions[voiceId as keyof typeof voiceOptions];
          const isSelected = value === voiceId;

          return (
            <label
              key={voiceId}
              className={cn(
                "voice-selector-option cursor-pointer",
                isSelected
                  ? "voice-selector-option-selected"
                  : "voice-selector-option-default",
                disabled &&
                  "voice-selector-option-disabled opacity-50 cursor-not-allowed",
              )}
            >
              <input
                type="radio"
                name="persona"
                value={voiceId}
                checked={isSelected}
                onChange={(e) => !disabled && onChange(e.target.value)}
                className="hidden"
                disabled={disabled}
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
                      isSelected
                        ? "border-[#663820] bg-[#f3e4c7]"
                        : "border-gray-300 bg-white",
                    )}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-[#663820]" />
                    )}
                  </div>
                  <span className="font-bold text-[#212a3b]">{voice.name}</span>
                </div>
                <p className="text-xs text-[#777] leading-relaxed">
                  {voice.description}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default VoiceSelector;
