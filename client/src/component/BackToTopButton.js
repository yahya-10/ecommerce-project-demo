import React, { useState, useEffect } from "react";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const styles = {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "50px",
    height: "50px",
    fontSize: "50px",
    color: "#ff9b69",
  };

  return (
    <div>
      {backToTopButton && (
        <ArrowCircleUpIcon style={styles} onClick={scrollUp} />
      )}
    </div>
  );
};

export default BackToTopButton;
