import React from "react";
import Link from "next/link";

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
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
// import other
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/SearchCarStyle.js";

const useStyles = makeStyles(styles);

export default function SectionSearchCar() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.title} style={{ marginLeft: "30px" }}>
        <h2>8 Results</h2>
      </div>
      <Grid container direction="column" style={{ marginLeft: "20px" }}>
        <Grid container direction="row">
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Link href="/carsPage">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="hovereffect">
                    <img
                      src="/img/car_vector.jpg"
                      alt
                      width={315}
                      height={280}
                    />
                  </div>
                  <GridListTileBar
                    title="for car name"
                    subtitle="Heloo"
                    // actionIcon={
                    //   <IconButton className={classone.icon}>
                    //     <StarIcon />
                    //   </IconButton>
                    // }
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
