import React, { Component } from "react";
import "./styles.css";

export default function ({ countryShort }) {
  return <span className={`flags fflag-${countryShort}`} />;
}