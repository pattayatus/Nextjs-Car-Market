import { container } from "styles/jss/nextjs-material-kit.js";
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
const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subbtitle: {
    fontSize: "1.313rem",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "750px",
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  cardInput: {
    height: "100px",
    width: "800px",
    display: "inline-block",
    position: "relative",
    borderRadius: "20px",
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      roseColor,
      0.46
    )}`,
  },
  formControl: {
    marginTop: "20px",
    height: "100px",
    width: "150px",
    marginLeft: "20px",
  },
  icons: {
    width: "50px",
    height: "50px",
    color: "#FFFFFF",
  },
  btSearch: {
    marginTop: "27px",
    marginLeft: "70px",
  },
};

export default componentsStyle;
