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
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">{children || text}</span>
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

        .ripple-btn span:not(:nth-child(6)) {
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

        .ripple-btn span:nth-child(6) {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ripple-btn span:nth-child(1) { transform: translate(-3.3em, -4em); }
        .ripple-btn span:nth-child(2) { transform: translate(-6em, 1.3em); }
        .ripple-btn span:nth-child(3) { transform: translate(-0.2em, 1.8em); }
        .ripple-btn span:nth-child(4) { transform: translate(3.5em, 1.4em); }
        .ripple-btn span:nth-child(5) { transform: translate(3.5em, -3.8em); }

        .ripple-btn:hover span:not(:nth-child(6)) {
          transform: translate(-50%, -50%) scale(5);
          transition: 1.5s ease;
        }
      `}} />
    </>
  );
};

export default RippleButton;
