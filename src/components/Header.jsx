import React from "react";
import NoteAltTwoToneIcon from "@mui/icons-material/NoteAltTwoTone";

function Header() {
  return (
    <header>
      <h1>
        <NoteAltTwoToneIcon fontSize="large" />
        <span >Notes Keeper</span>
      </h1>
    </header>
  );
}

export default Header;
