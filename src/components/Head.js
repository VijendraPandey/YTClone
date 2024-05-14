import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  // const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-md">
      <div className="flex col-span-1 ml-7">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mt-4 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDuObAFhBONAysts8pNQ3H2WJFb36z5A-w7W3Y_lWw&s"
        />

        <a href="/">
          <img
            className="h-16 mx-8"
            alt="youtube-logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          />
        </a>
      </div>

      <div className="col-span-10 ml-52 mt-3">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 mt-1 w-[28.1rem] rounded-2xl shadow-2xl border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 mt-3">
        <img
          className="h-10"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s"
        />
      </div>
    </div>
  );
};

export default Head;
