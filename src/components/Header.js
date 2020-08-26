import React from "react";
import Typical from "react-typical";

function Header() {
  return (
    <div>
      <p
        style={{ background: "white", paddingLeft: "2.5rem" }}
        className="font-bold text-4xl flex  text-left py-4 my-4 ml-12"
      >
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Lets get organised.",
            4000,
            "Plans for the day?",
            4000,
            "Lets get 💩 done.",
            4000,
            "That's a piece of 🎂",
            4000,
            "Finish that project.",
            4000,
            "This can't wait....",
            4000,
            "Lets be productive.",
            4000,
          ]}
        />
      </p>
    </div>
  );
}

export default Header;
