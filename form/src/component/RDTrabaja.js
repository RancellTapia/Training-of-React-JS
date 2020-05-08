import React from 'react';
import logo from '../image/RDTrabaja.png';
import { 
    makeStyles,
    CardMedia,
    Typography,
    Container,
    Grid,
    Paper,
 } from '@material-ui/core';

 const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 450,
      width: 325,
    },
    control: {
      padding: theme.spacing(2),
    },
    text: {
        textAlign: 'justify',
    },
    media: {
        height: 130,
        margin: (0,0,0,25),
    },
    title: {
        marginTop: 30,
        marginBottom: 20,
    },
    card: {
        marginBottom: 25,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(45),
        height: theme.spacing(68),
    },}
  }));

const RDTrabaja = () => {

    const classes = useStyles();

    return (
    
        <Grid container justify="center" spacing={2} className={classes.card}>
        
            <Paper elevation={2}>
                <Container>
                    <CardMedia
                    className={classes.media}
                    image={logo}
                    title="Contemplative Reptile"
                    />
                </Container>
                <Container>
                    <Typography variant="body1" className={classes.text}>
                        ●	En <b>RDTrabaja</b> somos un grupo de profesionales del área de administración, economía y programación localizados en la <b>República Dominicana</b> que queremos ayudarte a tener tranquilidad y seguridad en <b>el ámbito laboral.</b> Entendiendo que el futuro ha cambiado por la pandemia del COVID-19, queremos ayudarte a tener opciones de trabajo para el futuro, si quieres ser parte de nuestra red y que te mandemos <b>opciones laborales</b>, regístrate aquí.
                    </Typography>
                </Container>
            </Paper>
            <Paper elevation={7}>
                <Container>
                    <Typography variant="h4" className={classes.title}>
                        MISIÓN
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        ● Somos una <b>empresa de gestión</b> que buscamos conectar las personas que buscan trabajos con empresas que están necesitando personal nuevo y calificado. Dando a todos nuestros clientes una alta <b>calidad de servicio</b> y <b>seguridad</b> en el mercado nacional de la <b>República Dominicana.</b>                    
                    </Typography>
                    <Typography variant="h4" className={classes.title}>
                        VISIÓN
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        ●	¡Ayudar a más de <b>100,000</b> personas a conseguir trabajo y tener la <b>Mayor Base de Datos</b> laborales de la <b>República Dominicana.</b> 
                    </Typography>
                </Container>
            </Paper>
            <Paper elevation={22}>
                <Container>
                    <Typography variant="h4" className={classes.title}>
                        VALORES
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                        1.	Compromiso y Responsabilidad <br/>
                        2.	Seguridad <br/>
                        3.	Calidad <br/>
                        4.	Profesionalidad <br/>
                        5.	Trabajo en equipo <br/>
                    </Typography>
                </Container>
            </Paper>
        </Grid>      
      );
}
 
export default RDTrabaja;