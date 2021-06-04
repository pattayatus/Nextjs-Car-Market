import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import { UncontrolledCarousel, Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

// icon
import Icon from "@material-ui/core/Icon";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import styles from "styles/jss/nextjs-material-kit/pages/carPageStyle.js";

const useStyles = makeStyles(styles);

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CarsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const items = [
    {
      src: "/img/bg2.jpg",
      altText: "Slide 1",
      caption: "",
      header: "",
      key: "1",
    },
    {
      src: "/img/bg3.jpg",
      altText: "Slide 2",
      caption: "",
      header: "",
      key: "2",
    },
    {
      src: "/img/bg4.jpg",
      altText: "Slide 3",
      caption: "",
      header: "",
      key: "3",
    },
  ];
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Header
        color="transparent"
        brand="Car Market"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/profile-bg.jpg" />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.nameCar}>
            <h3>Name of Car...</h3>
          </div>
          <GridContainer className="container-car">
            <Grid item xs={12} sm={6} className="container-car-one">
              <div className={classes.imageSlide}>
                <Row>
                  <Col md="12" className="mx-auto">
                    <UncontrolledCarousel items={items} />
                  </Col>
                </Row>
                <div className={classes.rootDes}>
                  <Typography variant="h4" gutterBottom>
                    Description
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    How the adventure ended will be seen anon. Aouda was
                    anxious, though she said nothing. As for Passepartout, he
                    thought Mr. Fogg’s manoeuvre simply glorious. The captain
                    had said “between eleven and twelve knots,” and the
                    Henrietta confirmed his prediction.
                  </Typography>
                  <>
                    <br></br>
                  </>
                  <Typography variant="body1" gutterBottom>
                    If, then—for there were “ifs” still—the sea did not become
                    too boisterous, if the wind did not veer round to the east,
                    if no accident happened to the boat or its machinery, the
                    Henrietta might cross the three…
                  </Typography>
                  <Link color="inherit" href="/" onClick={handleClick}>
                    Show more
                  </Link>
                </div>
              </div>
              <Card className={classes.rootDataCar} elevation={5}>
                <Grid container direction="column">
                  <Grid container direction="row">
                    <Card className={classes.cardDataOne}>
                      <div style={{ textAlign: "center", margin: "14px" }}>
                        <CheckCircleOutlineIcon style={{ color: "#f73378" }} />

                        <Typography
                          variant="h8"
                          gutterBottom
                          style={{ marginLeft: "8px" }}
                        >
                          Backup camera
                        </Typography>
                      </div>
                    </Card>
                    <Card className={classes.cardDataOne}>
                      <div style={{ textAlign: "center", margin: "14px" }}>
                        <CheckCircleOutlineIcon style={{ color: "#f73378" }} />

                        <Typography
                          variant="h8"
                          gutterBottom
                          style={{ marginLeft: "8px" }}
                        >
                          Blind-spot warning
                        </Typography>
                      </div>
                    </Card>
                    <Card className={classes.cardDataOne}>
                      <div style={{ textAlign: "center", margin: "14px" }}>
                        <CheckCircleOutlineIcon style={{ color: "#f73378" }} />

                        <Typography
                          variant="h8"
                          gutterBottom
                          style={{ marginLeft: "8px" }}
                        >
                          Brake assist
                        </Typography>
                      </div>
                    </Card>
                    <Card className={classes.cardDataTwo}>
                      <div style={{ textAlign: "center", margin: "14px" }}>
                        <CheckCircleOutlineIcon style={{ color: "#f73378" }} />

                        <Typography
                          variant="h8"
                          gutterBottom
                          style={{ marginLeft: "8px" }}
                        >
                          Forward-collision warning
                        </Typography>
                      </div>
                    </Card>
                    <Card className={classes.cardDataTwo}>
                      <div style={{ textAlign: "center", margin: "14px" }}>
                        <CheckCircleOutlineIcon style={{ color: "#f73378" }} />

                        <Typography
                          variant="h8"
                          gutterBottom
                          style={{ marginLeft: "8px" }}
                        >
                          Parking assist systems
                        </Typography>
                      </div>
                    </Card>
                  </Grid>
                  <Grid container direction="column">
                    <Grid container direction="row" style={{ margin: "20px" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography variant="h15" component="h2">
                          Vehicle history
                        </Typography>
                        <Button
                          variant="outlined"
                          color="secondary"
                          style={{
                            width: "Auto",
                            height: "50px",
                            marginTop: "20px",
                          }}
                        >
                          Download Report
                        </Button>
                      </div>
                    </Grid>
                    <Grid container direction="row">
                      <Typography
                        variant="body1"
                        gutterBottom
                        style={{ margin: "20px" }}
                      >
                        Before you decide to buy a car, read its{" "}
                        <Link color="secondary" href="/" onClick={handleClick}>
                          history
                        </Link>{" "}
                        for free.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={5} className="container-car-two">
              <Typography variant="h5" component="h2">
                BMW 8-serie 2-door coupe grey
              </Typography>
              <Typography variant="h10" component="h10">
                2020{bull}Coupe{bull}Peltrol
              </Typography>
              <div>
                <hr></hr>
              </div>
              <Typography
                variant="colorSecondary"
                component="h2"
                style={{ marginTop: "30px" }}
              >
                $62,000
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon />}
                    name="checkedH"
                  />
                }
                label="Added to favorites"
              />
              <Card className={classes.root} elevation={5}>
                <Grid container spacing={2}>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Make:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      BMW
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Model:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      8-Serie
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Color:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      Grey
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Drive Type:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      Front Wheel Drive
                    </Box>
                  </Grid>

                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Transmission:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      Automatic
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Condition:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      New
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Engine Size:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      3.8L
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      Doors:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      2-door
                    </Box>
                  </Grid>

                  <Grid sm={6}>
                    <Box fontWeight="fontWeightBold" m={2}>
                      VIN:
                    </Box>
                  </Grid>
                  <Grid sm={6}>
                    <Box fontWeight="fontWeightLight" m={2}>
                      1C4TJPBA1CD907950
                    </Box>
                  </Grid>
                </Grid>
              </Card>
              <>
                <br />
                <br />
                <br />
              </>
              <Button
                variant="outlined"
                color="secondary"
                style={{ width: "100%", height: "50px" }}
                startIcon={<PhoneIcon />}
              >
                084-3414-844
              </Button>

              <Button
                variant="contained"
                // color="green500"
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "13px",
                  color: "white",
                  backgroundColor: "green",
                }}
                startIcon={<WhatsAppIcon />}
              >
                Chat via WhatApp
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "13px",
                  color: "white",
                  backgroundColor: "#ff9800",
                }}
              >
                Send message
              </Button>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Typography variant="h8" gutterBottom>
                  Offer ID #9650
                </Typography>
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button
                  variant="contained"
                  style={{
                    width: "180px",
                    height: "50px",
                    marginTop: "13px",
                    color: "white",
                    backgroundColor: "#1976d2",
                  }}
                  startIcon={<FacebookIcon />}
                >
                  Facebook
                </Button>
                <Button
                  variant="contained"
                  style={{
                    width: "180px",
                    height: "50px",
                    marginTop: "13px",
                    marginLeft: "10px",
                    color: "white",
                    backgroundColor: "#42a5f5",
                  }}
                  startIcon={<TwitterIcon />}
                >
                  Twitter
                </Button>
              </div>
            </Grid>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
