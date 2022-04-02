import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <div className="container">
      <h1 className="first-body-title">Create your portfolio in minutes.</h1>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Start Free Trial</Button>
        <Button variant="text">View Example</Button>
      </Stack>
    </div>
  );
}
