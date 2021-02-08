import { Grid, makeStyles, Typography } from "@material-ui/core"

const styles = makeStyles((theme) => ({
    root:{
        background:'#E7BB41',
        padding:30,
    },
    titulo:{
        color:"white",
        marginBottom:15,
        fontFamily:'Montserrat'
    }
}));



export const Info = () => {
    const classes = styles();
    return(
        <Grid className={classes.root} item container justify="center" alignItems="center" xs={12} >
            <Grid item container justify="center" alignItems="center" xs={6}>
                <Typography className={classes.titulo}  variant="h3">Bienvenido, ya puedes ordenar</Typography>
                <Typography className={classes.titulo} component="p">Desde nuestro sistema web, te permitimos hacer pedidos Online y pagarlos mediante cualquier metodo de pago.</Typography>
            </Grid>
            <Grid item container justify="center" alignItems="center" xs={4}>
                <imag src="./favicon.ico"></imag>
            </Grid>
        </Grid>
    )
}