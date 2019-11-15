import React from "react";
import css from "./Text.module.css";

function Text() {
  var quotes = [
    "I won't be a rock star. I will be a legend",
    "I'm just a musical prostitute my dear",
    "Who wants to live forever?",
    "The whole point of Queen was to be original",
    "Music is limitless",
    "I always knew I was a star and now, the rest of the world seems to agree with me",
    "A concert is not a live rendition of our album. It's a theatrical event"
  ];

  var counter = 0;

  setInterval(function() {
    if (counter >= quotes.length) {
      counter = 0;
    } else {
      counter++;
    }
  }, 7000);

  return (
    <div>
      <q className={css.quote}>{quotes[counter]}</q>
      <cite>Freddie Mercury</cite>
    </div>
  );
}

export default Text;
