import React, { useState, useEffect } from "react";
import css from "./Text.module.css";

const Text = () => {
  const [count, setCounter] = useState(0);

  const quotes = [
    "I won't be a rock star. I will be a legend",
    "I'm just a musical prostitute my dear",
    "Who wants to live forever?",
    "The whole point of Queen was to be original",
    "Music is limitless",
    "I always knew I was a star and now, the rest of the world seems to agree with me",
    "A concert is not a live rendition of our album. It's a theatrical event"
  ];

  useEffect(() => {
    const interval = setTimeout(() => {
      if (count >= quotes.length - 1) {
        setCounter(0);
      } else {
        setCounter(count + 1);
      }
    }, 2500);
    return () => clearTimeout(interval);
  }, [count]);

  console.log(count);

  return (
    <div className={css.textContainer}>
      <q
        className={`${css.quote} ${
          count % 2 === 0 ? css.animate1 : css.animate2
        }`}
      >
        {quotes[count]}
      </q>
      <cite className={css.cite}>Freddie Mercury</cite>
    </div>
  );
};

export default Text;
