import React from "react";
import BookIcon from '@mui/icons-material/Book';
import { Zoom } from "@mui/material";

function Header() {
  return (
    <header>
      <Zoom in={true}>
      <h1 style={{'text-align':'center'}}><BookIcon />  Note.Book</h1>
      </Zoom>
    </header>
  );
}

export default Header;
