import React, { useState } from "react";
import gitSVG from "../assets/github.svg";
import mailSVG from "../assets/mail.svg";
import phoneSVG from "../assets/phone.svg";

const Button = () => {
  const [hoveredButton, setHoveredButton] = useState("firstButton");

  function onHoverHandler(buttonName) {
    setHoveredButton(buttonName);
  }

  const buttonMapping = {
    firstButton: {
      SVG: phoneSVG,
      href: "https://www.youtube.com/channel/UC1QfI-ohmI_Gs_bcXy86Z9w?view_as=subscriber",
    },
    secondButton: {
      SVG: gitSVG,
      href: "https://www.youtube.com/channel/UC1QfI-ohmI_Gs_bcXy86Z9w?view_as=subscriber",
    },
    thirdButton: {
      SVG: mailSVG,
      href: "https://www.youtube.com/channel/UC1QfI-ohmI_Gs_bcXy86Z9w?view_as=subscriber",
    },
  };

  return (
    <div className="flex-container">
      {Object.keys(buttonMapping).map((buttonName, i) => {
        const { SVG, href } = buttonMapping[buttonName];
        const isActive = hoveredButton === buttonName;

        return (
          <a
            key={i}
            onMouseOver={() => onHoverHandler(buttonName)}
            className={`glowing ${isActive ? "active" : ""}`}
            href={href}
          >
            <img src={SVG} alt="svg" />
          </a>
        );
      })}
    </div>
  );
};

export default Button;