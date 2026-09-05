import React, { ReactNode } from "react";

interface RippleButtonProps {
  children?: ReactNode;
  text?: string;
  bgColor?: string;
  circleColor?: string;
  width?: string;  // e.g., "200px" or "100%"
  height?: string; // e.g., "50px"
  className?: string;
  onClick?: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  text,
  bgColor = "#ECB365",
  circleColor = "#d97706",
  width,
  height,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`ripple-btn group/ripple ${className}`}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
      }}
      onClick={onClick}
    >
      <span className="ripple-circle circle1" style={{ backgroundColor: circleColor }}></span>
      <span className="ripple-circle circle2" style={{ backgroundColor: circleColor }}></span>
      <span className="ripple-circle circle3" style={{ backgroundColor: circleColor }}></span>
      <span className="ripple-circle circle4" style={{ backgroundColor: circleColor }}></span>
      <span className="ripple-circle circle5" style={{ backgroundColor: circleColor }}></span>
      <span className="ripple-text">{children || text}</span>
    </button>
  );
};

export default RippleButton;
