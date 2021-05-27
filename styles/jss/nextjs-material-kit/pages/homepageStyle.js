import { container, title } from "styles/jss/nextjs-material-kit.js";
import customCheckboxRadioSwitch from "styles/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";
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

const homepageStyle = {
  sections: {
    padding: "70px 0",
  },
  container,

  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
  rootmain: {
    maxWidth: 600,
    maxHeight: 600,
  },
  root: {
    maxWidth: 280,
    maxHeight: 280,
  },
  media: {
    height: 140,
  },
  // btGroup: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   "& > *": {
  //     margin: theme.spacing(1),
  //   },
  // },

  ...customCheckboxRadioSwitch,
};

export default homepageStyle;
