import Link from "components/Link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  AppBar,
  Toolbar,
  Typography,
  Box
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MailIcon from '@material-ui/icons/Mail';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `5em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
  logo: {
    color: theme.palette.secondary.main,
    width: "max-content",
    fontSize: "1.5rem",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: `50px`,
    width: `50px`,
    color: `#fff`,
    [theme.breakpoints.down("xs")]: {
      height: `40px`,
      width: `40px`,
    },
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "0 6em",
  },
  link: {
    fontSize: "1.25em",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  appBar: {
    backgroundColor: '#497b55'
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <ElevationScroll>
        <AppBar position="relative" className={classes.appBar}>
          <Toolbar
            disableGutters
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              width: "100%",
              padding: matches ? "0 8px" : "12px",
              justifyContent: 'space-between'
            }}
          >
            <Link href="/">
              <Typography className={classes.logo}>
                <img src='https://order.wecohospitality.com/wp-content/themes/weco/images/logo.png'></img>
              </Typography>
            </Link>
            <Typography style={{ fontWeight: '500' }}>YOUR REQUEST</Typography>
            <Link href='mailto:weco@wecohospitality.com'>
              <Box display='flex'>
                <MailIcon style={{ color: '#396042', marginRight: '15px' }}></MailIcon>
                <Typography style={{ color: '#fff', fontWeight: '500' }}>NEED HELP?</Typography>
              </Box>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};
export default Header;
