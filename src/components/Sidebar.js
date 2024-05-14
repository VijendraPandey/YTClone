import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-36 shadow-lg p-5 h-[670px]">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Podcasts</li>
        <li>News</li>
        <li>Films</li>
        <li>Courses</li>
        <li>History</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
