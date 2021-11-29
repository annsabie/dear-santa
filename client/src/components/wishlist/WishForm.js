import React from "react";
import useInputState from "../../hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import  Divider from "@material-ui/core/Divider";

export default function WishForm({ addWish }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}> 
      <form
        onSubmit={event => {
          // prevent the default request to refresh the page
          event.preventDefault();
          addWish(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="What do you wish for?"
          fullWidth
        />
         <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add a link"
          fullWidth
        />
      </form>
    </Paper>
  );
}
