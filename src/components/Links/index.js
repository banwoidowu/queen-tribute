import React from "react";
import css from "./Links.module.css";
import spotify from "../../images/spotify.jpg";
import appleMusic from "../../images/apple-music.png";

const Links = () => {
  return (
    <div>
      <p className={css.header}>
        <i>Listen here</i>
      </p>
      <a
        href="https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d?si=yJMm3dqtSoKUkQNgcPJJAA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={spotify} className={css.spotify} alt="Spotify logo" />
      </a>
      <a
        href="https://music.apple.com/us/artist/queen/3296287"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={appleMusic} className={css.apple} alt="Apple Music logo" />
      </a>
    </div>
  );
};

export default Links;
