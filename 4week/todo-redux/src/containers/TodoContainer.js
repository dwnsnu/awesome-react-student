import React from "react";

export default function Todo({ text }) {
  return <li style={{ listStyle: "none" }}>{text}</li>;
}
