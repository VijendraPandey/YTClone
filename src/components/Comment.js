import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-lg bg-gray-100 rounded-md p-2 my-2">
      <img
      className="w-11 h-11"
        alt="profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s"
      />
      <div className="ml-3">
        <h3 className="font-bold text-base">{name}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
