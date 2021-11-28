import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from "@material-ui/core/colors";

const Input = styled('input')({
  display: 'none',
});

export default function UploadButton() {
  return (
    <label htmlFor="contained-button-file">
    <Input accept="image/*" id="contained-button-file" multiple type="file" />
    <Button sx={{ bgcolor: blue }} variant="contained" component="span">
      Upload
    </Button>
  </label>
  );
}