import React from 'react';
import logo from '../image/RDTrabaja.png';
import { 
    makeStyles,
    CardMedia,
    Typography,
    Container,
    Grid,
    Paper,
    CardActionArea,
    Card
 } from '@material-ui/core';

 const useStyles = makeStyles((theme) => ({

    root:{
        marginBottom: 25,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(90),
    }
    },
    text: {
        textAlign: 'justify',
    },
    contai: {
        marginTop: 20,
        marginBottom: 20,
    },
    media: {
        minHeight: 180,
        maxWidth: 300,
        marginLeft: 20,
    },
    media1: {
        maxWidth: 345,
        marginTop: 10,
        height: 200,
    },
    card: {
        marginBottom: 25,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(90),
    },}
  }));

const RDTrabaja = () => {

    const classes = useStyles();

    return (
    
        <Grid container justify="center" spacing={2} className={classes.root}>
        
            <Paper elevation={22}>
                <Grid justify="center" className={classes.card}>
                    <Card className={classes.media1} justify="center">
                        <CardActionArea >
                            <CardMedia 
                            className={classes.media}
                            image={logo}
                            title="Contemplative Reptile"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Container className={classes.contai}>
                    <Typography component={'span'} variant="body1" className={classes.text}>
                        ●	En <b>RDTrabaja</b> somos un grupo de profesionales del área de administración, economía y programación localizados en la <b>República Dominicana</b> que queremos ayudarte a tener tranquilidad y seguridad en <b>el ámbito laboral.</b> Entendiendo que el futuro ha cambiado por la pandemia del COVID-19, queremos ayudarte a tener opciones de trabajo para el futuro, si quieres ser parte de nuestra red y que te mandemos <b>opciones laborales</b>, regístrate aquí.
                    </Typography>
                </Container>
            </Paper>

        </Grid>      
      );
}
 
export default RDTrabaja;