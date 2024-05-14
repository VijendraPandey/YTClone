import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Soccer",
  "Movies",
  "News",
  "Trending",
  "Cricket",
  "Songs",
  "Live",
  "Cooking",
  "Video",
  "Vlogs",
  "Grandmaster"
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) =>
        <Button key={index} name={item} />
      )}
    </div>
  );
};

export default ButtonList;
