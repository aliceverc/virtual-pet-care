import React from "react";

export default function PetDisplay({ appearance }) {
  if (!appearance) return null;

  const partColors = {
    head: appearance.headColor || "#000",
    body: appearance.bodyColor || "#000",
    feet: appearance.feetColor || "#000",
  };

  const partBorders = {
    head: appearance.headBorderColor || "black",
    body: appearance.bodyBorderColor || "black",
    feet: appearance.feetBorderColor || "black",
  };

  const Part = ({ part, width, height, borderRadius }) => (
    <div
      style={{
        width,
        height,
        backgroundColor: partColors[part],
        border: `3px solid ${partBorders[part]}`,
        borderRadius,
      }}
    />
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
      }}
    >
      <Part part="head" width="80px" height="50px" borderRadius="20px" />
    </div>
  );
}
