import React from "react";
import css from "./Links.module.css";
import spotify from "../../images/spotify.jpg";
import appleMusic from "../../images/apple-music-2.jpg";
import youtube from "../../images/youtube.jpeg";

const Links = () => {
  return (
    <div className={css.linkBox}>
      <p className={css.header}>
        <i>Listen here</i>
      </p>
      <div className={css.images}>
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
        <a
          href="https://www.youtube.com/user/queenofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} className={css.youtube} alt="youtube logo" />
        </a>
      </div>
    </div>
  );
};

export default Links;
