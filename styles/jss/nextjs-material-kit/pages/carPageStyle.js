import { container, title } from "styles/jss/nextjs-material-kit.js";

import imagesStyle from "styles/jss/nextjs-material-kit/imagesStyles.js";
import { red, pink } from "@material-ui/core/colors";

const carPageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },

  mainRaised: {
    margin: "-200px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
  imageSlide: {
    maxWidth: "700px",
  },
  nameCar: {
    color: pink[500],
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    color: red[400],
  },
  root: {
    minWidth: "100%",
    marginTop: "50px",
    backgroundColor: "#e3f2fd",
  },

  rootDes: {
    minWidth: "100%",
    marginTop: "100px",
  },
  paperText: {
    textAlign: "left",
  },
  paperTextB: {
    textAlign: "left",
  },
  rootDataCar: {
    minWidth: "100%",
    height: "500px",
    marginTop: "50px",
    backgroundColor: "#e3f2fd",
  },
  cardDataOne: {
    maxWidth: "Auto",
    height: "60px",
    margin: "10px",
    marginTop: "30px",
  },
  cardDataTwo: {
    maxWidth: "Auto",
    height: "60px",
    margin: "10px",
    marginTop: "15px",
  },
};

export default carPageStyle;
