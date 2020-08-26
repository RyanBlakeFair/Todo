import React from "react";
import Typical from "react-typical";

function Header() {
  return (
    <div>
      <p
        style={{ background: "white", paddingLeft: "7rem" }}
        className="font-bold text-2xl flex  text-left py-4 my-4"
      >
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Be organised.",
            4000,
            "Plans?",
            4000,
            "Get 💩 done.",
            4000,
            "Piece of 🎂",
            4000,
            "Finish it.",
            4000,
            "Start now.",
            4000,
            "Be productive.",
            4000,
          ]}
        />
      </p>
    </div>
  );
}

export default Header;
