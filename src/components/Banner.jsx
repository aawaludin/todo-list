import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Banner() {
  const [text] = useTypewriter({
    words: [
      "Aldi Awaludin",
      "Web Developer",
      "Web Designer",
      "Fullstack Developer",
      "Geprekers",
    ],
    loop: {},
  });

  return (
    <>
      <h2 className="text-black">
        <span className="font-bold text-XS text-slate-400">I{"'"}m a </span>
        <span className="font-bold text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
          {text.toUpperCase()}
        </span>
        <Cursor cursorBlinking />
      </h2>
    </>
  );
}

export default Banner;
