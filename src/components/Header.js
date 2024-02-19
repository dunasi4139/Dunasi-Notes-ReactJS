import React from "react";
import LogoBar from "./LogoBar";
import SearchBar from "./searchBar";

function Header({ searchNote }) {
    return (
        <div className="note-app__header">
            <LogoBar />
            <SearchBar searchNote={searchNote} />
        </div>
    );
}
export default Header;