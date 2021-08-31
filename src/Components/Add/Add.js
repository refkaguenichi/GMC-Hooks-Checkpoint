import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Form from "./Form";
import "./Add.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Add({ addMovie }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [newMovie, setNewMovie] = React.useState({
    image: "",
    rating: 0,
    name: "",
    date: "",
    type: "",
    description: "",
  });

  const handleChangeInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Form
        addMovie={addMovie}
        handleChangeInput={handleChangeInput}
        newMovie={newMovie}
        handleClose={handleClose}
      />
    </div>
  );

  return (
    <div>
      <button className="btn-plus" type="button" onClick={handleOpen}>
        +
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
