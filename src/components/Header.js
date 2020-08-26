import React from "react";

const titles = [
  "Lets get organised.",
  "Whats on today?",
  "Get 💩 done!",
  "Piece of 🎂",
  "Finish that project!",
  "Ez pz",
  "Be productive.",
];
const toShow = titles[Math.floor(Math.random() * titles.length)];

function Header() {
  return (
    <div>
      <h1
        style={{ background: "white", paddingLeft: "2.5rem" }}
        className="font-bold text-4xl flex justify-center text-center py-4 my-4"
      >
        {toShow}
      </h1>
    </div>
  );
}

export default Header;
