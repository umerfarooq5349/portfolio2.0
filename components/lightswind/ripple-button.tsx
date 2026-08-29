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
    <>
      <button
        className={`ripple-btn ${className}`}
        style={{
          backgroundColor: bgColor,
          width: width,
          height: height,
        }}
        onClick={onClick}
      >
        <span className="ripple-circle circle1"></span>
        <span className="ripple-circle circle2"></span>
        <span className="ripple-circle circle3"></span>
        <span className="ripple-circle circle4"></span>
        <span className="ripple-circle circle5"></span>
        <span className="ripple-text">{children || text}</span>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .ripple-btn {
          font-family: inherit;
          font-weight: 700;
          padding: 1em 2em;
          border: none;
          border-radius: 9999px; /* full rounding */
          position: relative;
          cursor: pointer;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #000000;
          box-shadow: 0 10px 15px -3px rgba(236, 179, 101, 0.2);
        }

        .ripple-btn:hover {
          background-color: white !important;
          color: black;
        }

        .ripple-btn .ripple-circle {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 30px;
          width: 30px;
          background-color: ${circleColor};
          border-radius: 50%;
          transition: 0.6s ease;
          pointer-events: none;
        }

        .ripple-btn .ripple-text {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ripple-btn .circle1 { transform: translate(-3.3em, -4em); }
        .ripple-btn .circle2 { transform: translate(-6em, 1.3em); }
        .ripple-btn .circle3 { transform: translate(-0.2em, 1.8em); }
        .ripple-btn .circle4 { transform: translate(3.5em, 1.4em); }
        .ripple-btn .circle5 { transform: translate(3.5em, -3.8em); }

        .ripple-btn:hover .ripple-circle {
          transform: translate(-50%, -50%) scale(5);
          transition: 1.5s ease;
        }
      `}} />
    </>
  );
};

export default RippleButton;
