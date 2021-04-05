import React from "react";
import { allCountriesMap } from "./constant";
import "./styles.css";

export default function ({ countryShort, size, customWidth, customHeight }) {
  let backgroundPositionIndex = allCountriesMap.indexOf(countryShort);
  let selectedSize = "";
  switch (size) {
    case "sm":
    case "16":
      selectedSize = 16;
      break;
    case "md":
    case "24":
      selectedSize = 24;
      break;
    case "lg":
    case "32":
      selectedSize = 32;
      break;
    case "xl":
    case "48":
      selectedSize = 48;
      break;
    case "xxl":
    case "64":
      selectedSize = 64;
      break;
    default:
      selectedSize = 24;
  }
  if (backgroundPositionIndex < 0) {
    return (
      <span
        style={{
          width: `${selectedSize}px`,
          height: `${selectedSize}px`,
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
        className={`flags fflag-${countryShort} ff-${selectedSize}`}
        style={{
          display: "inline-block",
          backgroundPositionX: -(backgroundPositionIndex * selectedSize),
          backgroundPositionY: 0,
        }}
      />
    );
  }
}
