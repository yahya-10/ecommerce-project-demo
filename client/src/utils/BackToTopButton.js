import React, { useState, useEffect } from "react";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  // Scroll up button won't appear until you start scrolling down.
  useEffect(() => {
    let abortController = new AbortController();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
    return () => {
      abortController.abort();
    };
  });

  //Scroll up functionality
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //Button styling
  const styles = {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "50px",
    height: "50px",
    fontSize: "50px",
    // color: "#ff9b69",
    color: "#fa4605",
  };

  return (
    <div>
      {backToTopButton && (
        <ArrowCircleUpIcon
          style={styles}
          onClick={scrollUp}
          className="hidden lg:block md:block"
        />
      )}
    </div>
  );
};

export default BackToTopButton;
