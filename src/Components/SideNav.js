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
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function SideNav() {
  // Dialouge box
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
        <form>
          <DialogTitle>Upload</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Click on the upload button , choose the file and click on submit
                button
              </DialogContentText>
              <input
                autoFocus
                margin="dense"
                id="file"
                type="file"
                fullWidth
                variant="standard"
                required
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
