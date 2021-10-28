import React from "react";
import "./ContentPage.css";
import ContentPageHeader from "./ContentPageHeader";
import DocCards from "./DocCards";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { useParams } from "react-router";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function ContentPage() {
  return (
    <div className="contentpage">
      <ContentPageHeader title="My Drive" />
      <strong className="contentpage__sideheading">Suggested</strong>
      <div className="contentpage__cards">
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
        <DocCards Image={InsertDriveFileIcon} title="Nature.jpg" Icon={ImageOutlinedIcon} />
      </div>
    </div>
  );
}

export default ContentPage;
