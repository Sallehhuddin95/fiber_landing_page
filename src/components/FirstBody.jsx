import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ReactSVG } from "react-svg";
import Checkmark from "../graphics/Checkmark.svg";

export default function BasicButtons() {
  return (
    <div className="container first-body-div">
      <div>
        <h1 className="first-body-title">Create your portfolio in minutes.</h1>
        <p>
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <Stack spacing={2} direction="row">
          <Button className="trial-btn" variant="contained">
            Start Free Trial
          </Button>
          <Button className="example-btn" variant="text">
            View Example
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <div className="row">
            <ReactSVG src={Checkmark} />
            <p>No Credit Card Required</p>
          </div>
          <div>
            <ReactSVG src={Checkmark} /> 10 Free Templates
          </div>
        </Stack>
      </div>
      <div>
        <img
          className="hero-img"
          src={require("../graphics/hero-Illustration.png")}
          alt="hero-img"
        />
      </div>
    </div>
  );
}
