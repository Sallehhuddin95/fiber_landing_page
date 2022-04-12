import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ReactSVG } from "react-svg";
import Checkmark from "../graphics/Checkmark.svg";
import Star from "../graphics/star.svg";

export default function BasicButtons() {
  return (
    <div className="container first-body-div">
      <div className="first-body-child">
        <Stack className="mt-3" spacing={2} direction="row">
          <div className="rating-sec">
            <ReactSVG src={Star} />
            <ReactSVG src={Star} />
            <ReactSVG src={Star} />
            <ReactSVG src={Star} />
            <ReactSVG src={Star} />
            <p className="mx-2">Rated 4.8/5 (243 Reviews)</p>
          </div>
        </Stack>
        <h1 className="first-body-title">Create your portfolio in minutes.</h1>
        <p className="first-body-text">
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <Stack spacing={2} direction="row" className="BtnGroup">
          <Button className="trial-btn" variant="contained">
            Start Free Trial
          </Button>
          <Button className="example-btn" variant="text">
            View Example
          </Button>
        </Stack>
        <Stack className="mt-3 AdvGroup" spacing={2} direction="row">
          <div className="main-adv">
            <ReactSVG src={Checkmark} />
            <p className="mx-2">No Credit Card Required</p>
          </div>
          <div className="main-adv">
            <ReactSVG src={Checkmark} />{" "}
            <p className="mx-2">10 Free Templates</p>
          </div>
        </Stack>
      </div>
      <div className="hero-img-div col-sm-12">
        <img
          className="hero-img"
          src={require("../graphics/hero-Illustration.png")}
          alt="hero-img"
        />
      </div>
    </div>
  );
}
