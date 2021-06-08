import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import reactstrap
import { FormGroup, Form, Input } from "reactstrap";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// import Pages Section
import SectionSearchCar from "pages-sections/Components-Sections/SectionSearchCar.js";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

//  @material-ui component
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

// import other
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PhoneIcon from "@material-ui/icons/Phone";

import styles from "styles/jss/nextjs-material-kit/pages/SearchPageStyle.js";
import { red } from "@material-ui/core/colors";
// import crate AppBar
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

const useStylesTwo = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "225px",
  },
  SearchAppbar: {
    margin: theme.spacing(1),
    minWidth: "225px",
    marginRight: "50px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const MakeOptions = [
  { value: "audi", label: "Audi" },
  { value: "bentley", label: "Bentley" },
  { value: "bmw", label: "BMW" },
  { value: "cadillac", label: "Cadillac" },
];
const ModelOptions = [
  { value: "4-serie", label: "4-Serie" },
  { value: "488srider", label: "488 Srider" },
  { value: "6-serie", label: "6-Serie" },
  { value: "7-serie", label: "7-Serie" },
];
const TypeOptions = [
  { value: "convertible", label: "Convertible" },
  { value: "coupe", label: "Coupe" },
  { value: "haqtchback", label: "Haqtchback" },
  { value: "sedan", label: "Sedan" },
];

const MilOptions = [
  { value: "10k", label: "< 10,000 Miles" },
  { value: "50k", label: "< 50,000 Miles" },
  { value: "100k", label: "< 100,000 Miles" },
  { value: "150k", label: "< 150,000 Miles" },
  { value: "200k", label: "< 200,000 Miles" },
];

const DriveTyOptions = [
  { value: "awd", label: "AWD/4WD" },
  { value: "front", label: "Front Wheel Drive" },
  { value: "rear", label: "Rear Wheel Drive" },
];

const FuelTyOptions = [
  { value: "diesel", label: "Diesel" },
  { value: "electeic", label: "Electeic" },
  { value: "hybrid", label: "Hybrid" },
  { value: "petrol", label: "Petrol" },
];

const FeatureOptions = [
  { value: "360-degree", label: "360-degree" },
  { value: "blind", label: "Blind sport" },
  { value: "bluetooth", label: "Bluetooth" },
  { value: "cooled", label: "Cooled seats" },
];

export default function SearchPage(props) {
  const classes = useStyles();
  const classestwo = useStylesTwo();

  const [make, setMake] = React.useState("");
  const MakeChange = (event) => {
    setMake(event.target.value);
  };

  const [model, setModel] = React.useState("");
  const ModelChange = (event) => {
    setModel(event.target.value);
  };

  const [type, setType] = React.useState("");
  const TypeChange = (event) => {
    setType(event.target.value);
  };

  // const initialState = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   passwordConfirmation: "",
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser().then(clearState);
  };
  const clearState = () => {
    setState({ ...initialState });
  };

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const des = <span className={classes.dess}>-</span>;

  const [value, setValue] = React.useState(0);

  const handleAppbar = (event, newValue) => {
    setValue(newValue);
  };
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
        <div style={{ margin: "20px" }}>
          <Typography variant="h6" component="h2">
            <Link color="inherit" href="/">
              HomePage
            </Link>
            {des}
            Search
          </Typography>
        </div>
        <div maxWidth="100%">
          <Typography
            component="div"
            style={{ backgroundColor: "#f2f5fb", height: "170px" }}
          >
            <>
              <br />
            </>
            <Grid container direction="column">
              <Grid container direction="row">
                <FormControl
                  className={classestwo.formControl}
                  style={{ marginLeft: "50px" }}
                >
                  <Select isMulti placeholder="Make" options={MakeOptions} />
                </FormControl>
                <FormControl className={classestwo.formControl}>
                  <Select isMulti placeholder="Model" options={ModelOptions} />
                </FormControl>
                <FormControl className={classestwo.formControl}>
                  <Select isMulti placeholder="Type" options={TypeOptions} />
                </FormControl>

                <Card
                  className={classes.cardMinP}
                  style={{
                    borderRadius: "6px 0px 0px 6px",
                    marginTop: "8px",
                    marginLeft: "10px",
                  }}
                >
                  <FormControl className={classes.margin}>
                    <Input
                      placeholder="Min Price"
                      type="text"
                      style={{
                        width: "110px",
                        height: "38px",
                        borderRadius: "6px 0px 0px 6px",
                      }}
                    ></Input>
                  </FormControl>
                </Card>
                <Card
                  className={classes.cardMaxP}
                  style={{
                    borderRadius: "0px 6px 6px 0px",
                    marginTop: "8px",
                    marginRight: "10px",
                  }}
                >
                  <FormControl className={classes.margin}>
                    <Input
                      placeholder="Max Price"
                      type="text"
                      style={{
                        width: "110px",
                        height: "38px",
                        borderRadius: "0px 6px 6px 0px",
                      }}
                    ></Input>
                  </FormControl>
                </Card>
                <FormControl className={classestwo.formControl}>
                  <Select isMulti placeholder="Mileage" options={MilOptions} />
                </FormControl>
              </Grid>

              <Grid container direction="row">
                <FormControl
                  className={classestwo.formControl}
                  style={{ marginLeft: "50px" }}
                >
                  <Input isMulti placeholder="Location.."></Input>
                </FormControl>
                <FormControl className={classestwo.formControl}>
                  <Select
                    isMulti
                    isDisabled={true}
                    placeholder="Distance"
                    options={ModelOptions}
                  />
                </FormControl>
                <FormControl className={classestwo.formControl}>
                  <Select
                    isMulti
                    placeholder="Drive Type"
                    options={DriveTyOptions}
                  />
                </FormControl>

                <FormControl className={classestwo.formControl}>
                  <Select
                    isMulti
                    placeholder="Fuel Type"
                    options={FuelTyOptions}
                  />
                </FormControl>

                <FormControl className={classestwo.formControl}>
                  <Select
                    isMulti
                    placeholder="Features"
                    options={FeatureOptions}
                  />
                </FormControl>
              </Grid>
              <Grid container justify="flex-end">
                <Link
                  color="inherit"
                  href="/"
                  onClick={handleSubmit}
                  style={{ marginRight: "70px" }}
                >
                  Clear all
                </Link>
              </Grid>

              {/* <div>
                <hr></hr>
              </div> */}
            </Grid>
          </Typography>
          <div className={classes.root}>
            <AppBar
              color="default"
              position="static"
              style={{ Height: "100px" }}
            >
              <Tabs
                value={value}
                onChange={handleAppbar}
                aria-label="simple tabs example"
                indicatorColor="primary"
                textColor="black"
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="New" {...a11yProps(1)} />
                <Tab label="Used" {...a11yProps(2)} />
                <Grid container justify="flex-end">
                  {" "}
                  <FormControl
                    className={classestwo.SearchAppbar}
                    style={{ marginLeft: "50px" }}
                  >
                    <Input valid isMulti placeholder="Enter Keyword"></Input>
                  </FormControl>
                </Grid>
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <SectionSearchCar />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
