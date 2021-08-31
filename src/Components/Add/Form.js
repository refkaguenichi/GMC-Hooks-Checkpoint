import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Form.css";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

export default function Form({
  handleChangeInput,
  addMovie,
  newMovie,
  handleClose,
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add a new movie to the list
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleChangeInput}
            name="image"
            label="Image"
            fullWidth
            autoComplete="image"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleChangeInput}
            name="rating"
            label="Rating"
            min={1}
            max={5}
            fullWidth
            autoComplete="rating"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={handleChangeInput}
            name="name"
            label="name"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChangeInput}
            name="type"
            label="Type"
            fullWidth
            autoComplete="type"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleChangeInput}
            name="date"
            label="Date"
            fullWidth
            autoComplete="date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChangeInput}
            name="description"
            label="Description"
            fullWidth
            autoComplete="description"
          />
        </Grid>
        <Grid item xs={12} className="buttons">
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              addMovie(newMovie);
              handleClose();
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
