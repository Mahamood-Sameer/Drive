import React, { useState, useEffect } from "react";
import "./ContentPage.css";
import ContentPageHeader from "./ContentPageHeader";
import DocCards from "./DocCards";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { db } from "../fbase";

function ContentPage({ User }) {
  const [files, setFiles] = useState();

  // Collecting files from database
  useEffect(() => {
    db.collection("Persons")
      .doc(User?.uid)
      .collection("files")
      .onSnapshot((snapShot) => {
        setFiles(snapShot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="contentpage">
      <ContentPageHeader title="My Drive" />
      <strong className="contentpage__sideheading">Suggested</strong>
      <div className="contentpage__cards">
        {files?.length !== 0 ? (
          files?.map((file)=>(
            <DocCards
            Image={InsertDriveFileIcon}
            title={file.imagename}
            Icon={InsertDriveFileIcon}
            time={new Date(file?.timestamp?.toDate()).toUTCString()}
            URL = {file?.fileURL}
          />
          ))
        ) : (
          <h2 className="nofilesUploaded">No files uploaded</h2>
        )}
      </div>
    </div>
  );
}

export default ContentPage;
