import React, { useState } from "react";
import "./SideNav.css";
import { Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Options from "./Options";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { Slider } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { storage } from "../fbase";
import { db } from "../fbase";
import firebase from "@firebase/app-compat";

function SideNav({ User }) {
  // Dialouge box
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Uploading a File

  const Upload = (e) => {
    e.preventDefault();
    console.log(file);
    if (file) {
      const fileref = storage
        .ref(`files/${User?.email}_${file?.name}`)
        .put(file);
      fileref.on(
        "state_changed",
        (snapshot) => {
          // Progress....
          const progress_bar = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress_bar);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          storage.ref("files").child(`${User?.email}_${file.name}`).getDownloadURL().then(url => {
              db.collection('Persons').doc(User?.uid).collection("files").add({
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  fileURL: url,
                  imagename: `${file.name}`
              })
          })
      }
      );
    }
    setOpen(false);
  };

  return (
    <div className="sidenav">
      <Button className="sidenav__addbtn" onClick={handleClickOpen}>
        <AddOutlinedIcon className="sidenav__addicon" /> New
      </Button>
      <div className="sidenav__options">
        <Options Icon={AddToDriveOutlinedIcon} title="My Drive" />
        <Options Icon={ImportantDevicesOutlinedIcon} title="Computers" />
        <Options Icon={PeopleAltOutlinedIcon} title="Shared with me" />
        <Options Icon={QueryBuilderOutlinedIcon} title="Recent" />
        <Options Icon={StarBorderOutlinedIcon} title="Starred" />
        <Options Icon={DeleteOutlineOutlinedIcon} title="Bin" />
      </div>
      <div className="sidenav__storageicon"></div>
      <Options Icon={CloudOutlinedIcon} title="Storage" />
      <div className="sidenav__footer">
        <Slider
          className="sidenav__slider"
          size="small"
          disabled
          defaultValue={30}
          valueLabelDisplay="auto"
        />
        <p>5 GB of 15 GB is used</p>
        <Button>Buy Storage</Button>
      </div>

      {/* ---------- Dialoude box ---------- */}
      <Dialog open={open} onClose={handleClose}>
        <form
          onSubmit={(e) => {
            Upload(e);
          }}
        >
          <DialogTitle>Upload</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Click on the upload button , choose the file and click on submit
              button...
              <br></br>
              <br></br>
              <strong>It may take some time to be uploaded</strong>
            </DialogContentText>
            <input
              autoFocus
              margin="dense"
              id="file"
              type="file"
              fullWidth
              variant="standard"
              required
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Upload</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default SideNav;
