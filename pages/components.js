import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import ListItem from "@material-ui/core/ListItem";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Icon from "@material-ui/core/Icon";
import SearchIcon from "@material-ui/icons/Search";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { Card } from "@material-ui/core";
import HomePage from "./HomePage";
// page car maket

const useStyles = makeStyles(styles);

export default function Components(props) {
  const [search, setSearch] = React.useState("");

  const SearchChange = (event) => {
    setSearch(event.target.value);
  };

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Car Market"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/car_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Car Market.</h1>
                <div>
                  <Card className={classes.cardInput}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>All Makes</InputLabel>
                      <Select
                        value={search}
                        onChange={SearchChange}
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>BMW</MenuItem>
                        <MenuItem value={20}>Audi</MenuItem>
                        <MenuItem value={30}>Ford</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>All Models</InputLabel>
                      <Select
                        value={search}
                        onChange={SearchChange}
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>A4</MenuItem>
                        <MenuItem value={20}>A7</MenuItem>
                        <MenuItem value={30}>A8</MenuItem>
                        <MenuItem value={20}>e-tron</MenuItem>
                        <MenuItem value={30}>Q8</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Max Price</InputLabel>
                      <Select
                        value={search}
                        onChange={SearchChange}
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>฿15,000</MenuItem>
                        <MenuItem value={20}>฿30,000</MenuItem>
                        <MenuItem value={30}>฿50,000</MenuItem>
                        <MenuItem value={20}>฿100,000</MenuItem>
                        <MenuItem value={30}>฿200,000</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      href="#pablo"
                      className={classes.btSearch}
                      onClick={(e) => e.preventDefault()}
                      color="rose"
                      round
                    >
                      <SearchIcon className={classes.icons} />
                      Search
                    </Button>
                  </Card>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <HomePage />
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
