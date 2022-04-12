import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactSVG } from "react-svg";
import Time from "../graphics/time.svg";
import Code from "../graphics/code.svg";
import AllSize from "../graphics/allSizes.svg";
import NameCard from "./NameCard";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MediaCard() {
  return (
    <div className="container mt-5 MainBodyDiv">
      <div className="main-body-title">
        <h6 className="text-title">Why Fiber?</h6>
        <h3 className="text-bold">
          A good portfolio means good employability.
        </h3>
      </div>
      <div className="our-adv mt-3">
        <Card className="card-div" sx={{ maxWidth: 345 }}>
          <ReactSVG src={Time} />
          <CardContent className="card-content">
            <Typography
              className="text-bold card-ctn-text"
              gutterBottom
              variant="h5"
              component="div"
            >
              Build in minutes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card-div" sx={{ maxWidth: 345 }}>
          <ReactSVG src={Code} />
          <CardContent className="card-content ">
            <Typography
              className="text-bold card-ctn-text"
              gutterBottom
              variant="h5"
              component="div"
            >
              Add custome CSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card-div" sx={{ maxWidth: 345 }}>
          <ReactSVG src={AllSize} />
          <CardContent className="card-content ">
            <Typography
              className="text-bold card-ctn-text"
              gutterBottom
              variant="h5"
              component="div"
            >
              Responsive
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="portfolio-body mt-5">
        <div>
          <Card className="portfolio-text">
            <CardContent>
              <Typography
                className="portfolio-title text-bold"
                gutterBottom
                variant="h4"
                component="div"
              >
                Diversify your portfolio.
              </Typography>
              <Typography
                className="text-white"
                variant="body2"
                color="text.secondary"
              >
                Create an event more impressive portfolio by creating case
                studies for your projects. Simply follow our step-by-step guide.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="strt-trial-btn" size="small">
                Start Free Trial
              </Button>
            </CardActions>
          </Card>
        </div>
        <img
          className="page-img"
          src={require("../graphics/Page Image.png")}
          alt="hero-img"
        />
      </div>
      <div>
        <NameCard />
      </div>
    </div>
  );
}
