import React, { useEffect, useState } from "react";

function FadeInComponent({ children, className }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the fade-in effect to ensure the components are rendered
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`fade-in ${isVisible ? "active" : ""} ${className}`}>
      {children}
    </div>
  );
}
export default FadeInComponent;
