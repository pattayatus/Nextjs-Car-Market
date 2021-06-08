/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload, Search } from "@material-ui/icons";
import DnsIcon from "@material-ui/icons/Dns";
import PagesIcon from "@material-ui/icons/Pages";
import MoreIcon from "@material-ui/icons/More";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Home"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/profile">
              <a className={classes.dropdownLink}>Profile</a>
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Search"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Search}
          dropdownList={[
            <Link href="/SearchPage">
              <a className={classes.dropdownLink}>SearchPage</a>
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Listing"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={DnsIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Listing1</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Listing2</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Listing3</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Listing4</a>
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Pages"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={PagesIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Pages1</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Pages2</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Pages3</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Pages4</a>
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="More"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={MoreIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>More1</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>More2</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>More3</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>More4</a>
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItemLogin}>
        <Button
          href="/login"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>login</Icon> Log in
        </Button>
      </ListItem>

      <ListItem className={classes.listItemRegis}>
        <Button
          href="/register"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}></Icon> Register
        </Button>
      </ListItem>
    </List>
  );
}
