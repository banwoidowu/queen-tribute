import React, { useState, useEffect } from "react";
import cn from "classnames";
import css from "./Text.module.css";

const Text = () => {
  const [count, setCounter] = useState(0);
  const [fade, setFade] = useState(true);

  const quotes = [
    "I won't be a rock star. I will be a legend",
    "I'm just a musical prostitute my dear",
    "Who wants to live forever?",
    "The whole point of Queen was to be original",
    "Music is limitless",
    "I always knew I was a star and now, the rest of the world seems to agree with me",
    "A concert is not a live rendition of our album. It's a theatrical event",
    "I want to lead the Victorian life, surrounded by exquisite clutter."
  ];

  const updateQuote = () => {
    if (count >= quotes.length - 1) {
      setCounter(0);
    } else {
      setCounter(count + 1);
    }
  };

  useEffect(() => {
    if (!fade) {
      updateQuote();
      setFade(true);
    }
  }, [fade]);

  return (
    <div
      className={cn(css.textContainer, { [css.fadeIn]: fade })}
      onAnimationEnd={() => setFade(false)}
    >
      <q className={css.quote}>{quotes[count]}</q>
      <cite className={css.cite}>Freddie Mercury</cite>
    </div>
  );
};

export default Text;
