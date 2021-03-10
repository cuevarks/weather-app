import React from "react";

export const Card = ({ children, styleClass = "" }) => {
  return <div className={`card-container ${styleClass}`}>{children}</div>;
};
