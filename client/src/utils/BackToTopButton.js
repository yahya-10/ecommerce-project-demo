import React, { useState, useEffect, Fragment } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/outline";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  // Scroll up button won't appear until you start scrolling down.
  useEffect(() => {
    // let abortController = new AbortController();
    let isMounted = true;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
    return () => {
      // abortController.abort();
      isMounted = false;
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
    fontSize: "50px",
    color: "blue",
  };

  return (
    <Fragment>
      {backToTopButton && (
        <div className="cursor-pointer">
          <ChevronDoubleUpIcon
            style={styles}
            onClick={scrollUp}
            className="h-6 w-6 hidden lg:block md:block"
          />
        </div>
      )}
    </Fragment>
  );
};

export default BackToTopButton;
