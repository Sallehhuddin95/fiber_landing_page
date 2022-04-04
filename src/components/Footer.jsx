import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";

export default function FifthSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="footer-div container">
      <div className="footer-link-div">
        <div className="col-div col-xs-12">
          <p className="footer-header">Fiber</p>
          <p className="">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <p className="">Made with love in the Netherlands.</p>
        </div>
        <div className="col-div col-xs-12">
          <p className="footer-link footer-header">Sitemap</p>

          <a className="footer-link" href="#">
            Help Center
          </a>

          <a className="footer-link" href="#">
            Account
          </a>

          <a className="footer-link" href="#">
            Media Center
          </a>
        </div>
        <div className="col-div col-xs-12">
          <p className="footer-link footer-header">Resources</p>

          <a className="footer-link" href="#">
            Jobs
          </a>

          <a className="footer-link" href="#">
            Redeem Gift Cards
          </a>

          <a className="footer-link" href="#">
            Buy Gift Cards
          </a>
        </div>
        <div className="col-div col-xs-12">
          <p className="footer-link footer-header">Company</p>

          <a className="footer-link" href="#">
            Terms of Use
          </a>

          <a className="footer-link" href="#">
            Privacy
          </a>

          <a className="footer-link" href="#">
            Cookie Preferences
          </a>
        </div>
        <div className="col-div col-xs-12">
          <p className="footer-link footer-header">Portfolios</p>

          <a className="footer-link" href="#">
            Contact Us
          </a>

          <a className="footer-link" href="#">
            Speed Test
          </a>

          <a className="footer-link" href="#">
            Legal Notices
          </a>
        </div>
      </div>
    </div>
  );
}
