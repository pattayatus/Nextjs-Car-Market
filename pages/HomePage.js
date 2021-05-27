import React from "react";

// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import {
  hexToRGBAlpha,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth,
} from "styles/jss/nextjs-material-kit.js";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import styles from "styles/jss/nextjs-material-kit/pages/homepageStyle.js";

const useStylesone = makeStyles((theme) => ({
  btGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "1000px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const useStyles = makeStyles(styles);

export default function HomePage() {
  const classes = useStyles();
  const classone = useStylesone();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Handy picked</h2>
        </div>

        <div>
          <div className={classes.title}>
            <h1>Featured Listings</h1>
            <div className={classone.btGroup}>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button>New</Button>
                <Button>Used</Button>
              </ButtonGroup>
            </div>
          </div>

          <div></div>

          <GridContainer className="containermain">
            <GridContainer className="container-one">
              <Grid>
                <Card className={classes.rootmain}>
                  <CardActionArea>
                    <div className="hovereffect">
                      <img
                        src="/img/car_vector.jpg"
                        alt
                        width={600}
                        height={600}
                      />
                    </div>
                    <GridListTileBar
                      title="Name of the car1.1"
                      subtitle="Heloo"
                      // actionIcon={
                      //   <IconButton className={classone.icon}>
                      //     <StarIcon />
                      //   </IconButton>
                      // }
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </GridContainer>

            <GridContainer className="container-two">
              <Grid>
                <Card className={classes.root}>
                  <CardActionArea>
                    <div className="hovereffect">
                      <img
                        src="/img/car_vector.jpg"
                        alt
                        width={280}
                        height={280}
                      />
                    </div>
                    <GridListTileBar
                      title="Name of the car2.1"
                      subtitle="Heloo"
                      // actionIcon={
                      //   <IconButton className={classone.icon}>
                      //     <StarIcon />
                      //   </IconButton>
                      // }
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid style={{ marginTop: "20px" }}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <div className="hovereffect">
                      <img
                        src="/img/car_vector.jpg"
                        alt
                        width={280}
                        height={280}
                      />
                    </div>
                    <GridListTileBar
                      title="Name of the car2.2"
                      subtitle="Heloo"
                      // actionIcon={
                      //   <IconButton className={classone.icon}>
                      //     <StarIcon />
                      //   </IconButton>
                      // }
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </GridContainer>
            <GridContainer className="container-two">
              <Grid>
                <Card className={classes.root}>
                  <CardActionArea>
                    <div className="hovereffect">
                      <img
                        src="/img/car_vector.jpg"
                        alt
                        width={280}
                        height={280}
                      />
                    </div>
                    <GridListTileBar
                      title="Name of the car3.1"
                      subtitle="Heloo"
                      // actionIcon={
                      //   <IconButton className={classone.icon}>
                      //     <StarIcon />
                      //   </IconButton>
                      // }
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid>
                <Card className={classes.root}>
                  <CardActionArea>
                    <div className="hovereffect">
                      <img
                        src="/img/car_vector.jpg"
                        alt
                        width={280}
                        height={280}
                      />
                    </div>
                    <GridListTileBar
                      title="Name of the car3.2"
                      subtitle="Heloo"
                      // actionIcon={
                      //   <IconButton className={classone.icon}>
                      //     <StarIcon />
                      //   </IconButton>
                      // }
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </GridContainer>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
