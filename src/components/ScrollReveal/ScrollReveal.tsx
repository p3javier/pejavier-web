import React, { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";
import "./ScrollReveal.css";

interface ScrollRevealProps {
  style: CSSProperties;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, style }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 650,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container outline-none"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
