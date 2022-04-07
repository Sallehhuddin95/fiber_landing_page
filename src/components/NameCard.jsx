import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { ReactSVG } from "react-svg";
import User1 from "../graphics/User Avatar.svg";
import User2 from "../graphics/User Avatar 2.svg";
import User3 from "../graphics/User Avatar 32.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="namecard-div my-5">
      <Card sx={{ maxWidth: 345 }} className="mx-3 namecard">
        <CardHeader
          className="card-header-title text-left"
          avatar={<ReactSVG src={User1} />}
          title="Sarah Andrew"
          subheader="100k in revenue"
        />

        <CardContent>
          <Typography
            className="namecard-text"
            variant="body2"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button className="namecard-btn" size="small">
            View Sarah's Portfolio
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }} className="mx-3 namecard">
        <CardHeader
          className="card-header-title text-left"
          avatar={<ReactSVG src={User2} />}
          title="Mathew Higgins"
          subheader="20k in revenue"
        />

        <CardContent>
          <Typography
            className="namecard-text"
            variant="body2"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button className="namecard-btn" size="small">
            View Mathew's Portfolio
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }} className="namecard">
        <CardHeader
          className="card-header-title"
          avatar={<ReactSVG src={User3} />}
          title="Janice Dave"
          subheader="30k in revenue"
        />

        <CardContent>
          <Typography
            className="namecard-text"
            variant="body2"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button className="namecard-btn" size="small">
            View Janice's Portfolio
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
