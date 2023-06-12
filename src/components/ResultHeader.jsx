import React from "react";
import Play from "../assets/images/icon-play.svg";

const ResultHeader = ({ searchResults }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-5xl font-bold leading-relaxed">
          {searchResults[0].word}
        </h2>
        <h3 className="text-2xl text-light-utility">
          {searchResults[0].phonetic}
        </h3>
      </div>
      <button>
        <img src={Play} alt="" />
      </button>
    </div>
  );
};

export default ResultHeader;
