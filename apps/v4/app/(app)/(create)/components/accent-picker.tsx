import React from "react";
import { cn } from "@/lib/utils";

export function AccentPicker({ value, onChange, className }) {
  const accents = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#10b981" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Orange", value: "#f59e0b" },
    { name: "Red", value: "#ef4444" },
  ];

  return (
    <div className={cn("flex gap-2", className)}>
      {accents.map((accent) => (
        <button
          key={accent.value}
          type="button"
          title={accent.name}
          aria-label={`Set accent to ${accent.name}`}
          onClick={() => onChange(accent.value)}
          className={cn(
            "h-8 w-8 rounded-full border-2 transition-transform",
            value === accent.value
              ? "border-foreground scale-110"
              : "border-transparent hover:scale-105"
          )}
          style={{ backgroundColor: accent.value }}
        />
      ))}
    </div>
  );
}