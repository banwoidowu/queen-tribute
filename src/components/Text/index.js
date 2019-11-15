import React, { useState, useEffect } from "react";
import css from "./Text.module.css";

const Text = () => {
  let [count, setCounter] = useState(1);

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
    const interval = setInterval(() => {
      if (count >= quotes.length) {
        setCounter((count = 0));
      } else {
        setCounter(count++);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  console.log(count);

  return (
    <div>
      <q className={css.quote}>{quotes[count]}</q>
      <cite>Freddie Mercury</cite>
    </div>
  );
};

export default Text;
