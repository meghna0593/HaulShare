import "../App.css";
import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchPage = () => {
  return (
    <MDBCol md="8">
      <form className="searchbar">
        <MDBIcon icon="search" />
        <input
          type="text"
          placeholder="Search Recent Post"
          aria-label="Search"
        />
      </form>
    </MDBCol>
  );
};

export default SearchPage;
