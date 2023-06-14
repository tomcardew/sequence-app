import "./CardLike.css";

import React, { PropsWithChildren } from "react";

interface Props {
  style?: React.CSSProperties;
}

export default function CardLike({
  style,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div style={style} id="card-like-container">
      <div className="card-like-content">{children}</div>
    </div>
  );
}
