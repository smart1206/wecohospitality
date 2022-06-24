import { makeStyles } from "@material-ui/core/styles";

import { Container, Box, Grid, Typography, } from "@material-ui/core";

import Social from "components/Social";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box display='flex' justifyContent="space-between">
          <Typography style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '22px',
            lineHeight: '22px',
            letterSpacing: '1px',
            color: '#FFFFFF',
          }}><span style={{ fontWeight: 600 }}>WECO</span> HOSPITALITY</Typography>
          <Grid container direction="column" style={{ width: '10%' }}>
            <Social />
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
