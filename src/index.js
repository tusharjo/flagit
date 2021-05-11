import React from "react";
import { allCountriesMap } from "./constant";
import "./styles.css";

export default function ({ countryShort, size = "16" }) {
  let backgroundPositionIndex = allCountriesMap.indexOf(countryShort);
  switch (size) {
    case "sm":
      size = 16;
      break;
    case "md":
      size = 24;
      break;
    case "lg":
      size = 32;
      break;
    case "xl":
      size = 48;
      break;
    case "xxl":
      size = 64;
      break;
    default:
  }
  if (backgroundPositionIndex < 0) {
    return (
      <span
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#f9f9fb",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          color: "#8a929e",
        }}
      >
        {countryShort}
      </span>
    );
  } else {
    return (
      <span
        className={`flagit fflagit-${countryShort}`}
        style={{
          display: "inline-block",
          width: `${size}px`,
          height: `${size}px`,
          backgroundPositionX: -(backgroundPositionIndex * size),
          backgroundPositionY: 0,
        }}
      />
    );
  }
}
