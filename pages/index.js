import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Box, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { useState } from "react";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  title1: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '21.3523px',
    lineHeight: '26px',
    textDecoration: 'none',
    color: 'rgba(73, 123, 85, 0.5)',
    textAlign: 'center',
    margin: '10px 0px 50px',
  },
  quantity: {
    fontSize: '20px',
    lineHeight: '23px',
    color: '#212121',
    textAlign: 'right'
  },
  calendar: {
    background: 'url(https://order.wecohospitality.com/wp-content/themes/weco/images/icon-calendar.svg) no-repeat 0px 0px',
    width: '25px',
    height: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    color: '#497b55',
    fontWeight: '600',
    paddingTop: '5px'
  },
  dates: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#607B54',
    textTransform: 'uppercase',
    marginLeft: '10px'
  },
  strongTitle: {
    fontWeight: '600',
    marginRight: '9px',
    "&::after": {
      fontFamily: 'Poppins',
      content: "'|'",
      marginLeft: '7px',
    }
  },
  minPlusBtn: {
    fontFamily: 'Poppins',
    fontSize: '17.0818px',
    lineHeight: '20px',
    color: 'rgba(73, 123, 85, 0.5)',
    height: '32px',
    padding: '0',
    minWidth: '32px !important',
    position: 'relative',
    border: ' 2px solid rgba(73, 123, 85, 0.6)',
    borderRadius: '6px',
    outline: 'none',
  },
  addBag: {
    marginTop: '47px',
    width: '299px',
    maxWidth: '100%',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '17px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#497b55',
    border: '0',
    borderRadius: 0,
    padding: '21px 33px',
    outline: 'none',
    textDecoration: 'none',
    letterSpacing: '1px',
    "&:hover": {
      background: '#3d6446'
    }
  }
}));

const Index = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [count, setCount] = useState(1);

  const minus = () => {
    if (count > 1 && count < 11) {
      setCount(count - 1)
    }
  }

  const plus = () => {
    if (count > 0 && count < 10) {
      setCount(count + 1)
    }
  }

  return (
    <Layout
      // type your page title and page description.
      title="WECO Boston 6/27-7/1 - WECO Hospitality"
      description="WECO Boston 6/27-7/1 - WECO Hospitality"
    >
      <Container>
        <Box mt='90px'>
          <Typography variant='h3'>Good Morning</Typography>
          <Box className={classes.title1}>
            Meals are available for delivery to your home or for pickup at our Acton, MA or Burlington, MA locations.
            <br />
            <Box display='flex' alignItems='center' justifyContent='center'>
              <LocationOnIcon></LocationOnIcon>
              <Link href="#" style={{ color: 'rgba(73, 123, 85, 0.5)', textDecoration: 'underline' }}>See pickup location details.</Link>
            </Box>
          </Box>
          <Typography className={classes.quantity}>Quantity</Typography>
        </Box>
        <Box display='flex' alignItems='center' mt='40px' mb='20px'>
          <Box display='flex'>
            <Box className={classes.calendar}>
              M
            </Box>
            <Typography className={classes.dates}>
              Monday - 06/27
            </Typography>
          </Box>
          <Box ml='30px'>
            <RadioGroup style={{ flexDirection: 'row' }} defaultValue="" aria-label="gender" name="customized-radios">
              <FormControlLabel value="pickup" control={<GreenRadio />} label="Pickup" />
              <FormControlLabel value="delivery" control={<GreenRadio />} label="Delivery" />
            </RadioGroup>
          </Box>
        </Box>
        <Box borderBottom='1px solid #ADA29A'>
          {
            [1, 2].map(elem => (
              <Grid container key={elem} style={{ padding: '20px 0', alignItems: 'center' }}>
                <Grid item md={8}>
                  <Typography>
                    <span className={classes.strongTitle}>duck confit </span>lemon + peppercorn cured duck leg confit in duck fat; cherry gastrique; blistered green beans with Calabrian chili and fried garlic; duck fat roasted potatoes (ingredients ~$12)
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Box display='flex' justifyContent='end'>
                    <Box style={{
                      width: '120px',
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "10px",
                      color: "#000",
                    }}>
                      <Button onClick={minus} className={classes.minPlusBtn}>-</Button>
                      <Typography style={{ margin: '0 10px', fontSize: '20px', textAlign: 'center' }}>{count}</Typography>
                      <Button onClick={plus} className={classes.minPlusBtn}>+</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))
          }
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button className={classes.addBag}>ADD TO BAG</Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Index;
