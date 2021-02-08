import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background:"#393E41", 
      //height:100
    },
    rootMenu: {
        width: 600,
        background:"#393E41",
        height:60
    },
    title: {
      flexGrow: 1,
    },
    wrapper:{
        color:'white'
    },
    selected:{
        background:'radial-gradient(black, transparent);'
    }
  }));
  

export const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return(
    <AppBar position="static" classes={{root:classes.root}}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            LOS DIABLITOS
        </Typography>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.rootMenu}
            >
            <BottomNavigationAction label="INFORMACION" classes={{wrapper:classes.wrapper,selected:classes.selected}} />
            <BottomNavigationAction label="MENUS" classes={{wrapper:classes.wrapper,selected:classes.selected}}/>
            <BottomNavigationAction label="METODOS DE PAGO" classes={{wrapper:classes.wrapper,selected:classes.selected}}/>
            <BottomNavigationAction label="CONTACTO" classes={{wrapper:classes.wrapper,selected:classes.selected}}/>
        </BottomNavigation>
        </Toolbar>
    </AppBar>
    )
}