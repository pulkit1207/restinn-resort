import "../assets/css/Navbar.css";
import "../assets/css/Search.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="my-search">
      <div className="search-box">
        <input
          type="text"
          className="search"
          placeholder="Search by Property Type"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button type="submit" className="search-btn" onClick ={(e)=>{
          navigate(`/properties/search/${search}`)
        }}> 
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
