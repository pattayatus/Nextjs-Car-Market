import { container, title } from "styles/jss/nextjs-material-kit.js";
import customCheckboxRadioSwitch from "styles/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
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
    maxWidth: 520,
    maxHeight: 500,
  },
  root: {
    maxWidth: 250,
    maxHeight: 250,
  },
  media: {
    height: 140,
  },
  ...customCheckboxRadioSwitch,
};

export default basicsStyle;
