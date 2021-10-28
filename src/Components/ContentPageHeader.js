import React from "react";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function ContentPageHeader({ title }) {
  return (
    <div className="contentpage__header">
      <p>{title}</p>
      <div className="contentpage__header__icons">
        <ListOutlinedIcon className="icons" />
        <ErrorOutlineOutlinedIcon className="icons" />
      </div>
    </div>
  );
}

export default ContentPageHeader;
