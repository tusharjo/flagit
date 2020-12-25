import React from "react";
import "./styles.css";

export default function ({ countryShort, size, customWidth, customHeight }) {
  return (
    <span
      className={`flags fflag-${countryShort} ff-${size ?? "sm"}`}
      style={{
        width: customWidth ?? null,
        height: customHeight ?? null,
      }}
    />
  );
}
