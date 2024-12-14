import React, { useEffect, useState } from "react";

const SlideUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className={`scroll-to-top cursor slide-up ${isVisible ? "visible" : ""}`}
    >
      <img
        style={{ maxHeight: `78px` }}
        src="/assets/slideup.png"
        alt="slide-up"
      />
    </div>
  );
};

export default SlideUp;
