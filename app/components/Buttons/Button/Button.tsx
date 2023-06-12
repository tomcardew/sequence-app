import "./Button.css";
import React from "react";

interface Props {
  label: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Button({ label, style, onClick = () => {} }: Props) {
  return (
    <button id="button-container" style={style} onClick={onClick} type="button">
      <div className="button-label">{label}</div>
    </button>
  );
}
