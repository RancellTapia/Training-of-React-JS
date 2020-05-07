import React, { useState } from 'react';
import { 
    Paper, 
    Grid, 
    makeStyles, 
    Container, 
    TextField, 
    InputLabel, 
    FormControl, 
    Select, 
    MenuItem,
} from '@material-ui/core';
import 'date-fns';


import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    //   marginTop: 90,
    },
    paper: {
      padding: theme.spacing(3),
      color: theme.palette.text.secondary,
    },
    title: {
        fontSize: 35,
    },
    field:{
        padding: theme.spacing(0, 0, 0),
        margin: (10, 0, 0, 20),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));

const PersonalForm = () => {
    const classes = useStyles();

    const [birthdate, setBirthdate] = useState(new Date());
  
    const handleDateChange = date => {
        setBirthdate(date);
      
    };

    const [sex, setSex] = useState('');

    const handleChange = (event) => {
      setSex(event.target.value);
    };
  

    return ( 

        <Container>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <label className={classes.title}>Datos Personales</label>
                        <Paper className={classes.paper}>
                            <Container>
                                <TextField id="nombre" className={classes.field} label="Nombre*" color="secondary" />
                                <TextField id="apellido" className={classes.field} label="Apellido*" color="secondary" />
                                <TextField id="telefono-fijo" className={classes.field} label="Teléfono fijo" color="secondary" />
                                <TextField id="telefono-movil" className={classes.field} label="Teléfono Movil*" color="secondary" />
                                <TextField id="email" className={classes.field} label="Email*" color="secondary" />
                                
                                <hr/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "birthdate"
                                        margin="normal"
                                        id="birthdate"
                                        label="Fecha de nacimiento"
                                        format="MM/dd/yyyy"
                                        value={birthdate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </MuiPickersUtilsProvider>

                                <TextField id="nacionalidad" className={classes.field} label="Nacionalidad*" color="secondary" />
                                
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sex}
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={"femenino"}>Femenino</MenuItem>
                                    <MenuItem value={"masculino"}>Masculino</MenuItem>
                                    <MenuItem value={"otro"}>Otro</MenuItem>
                                    </Select>
                                </FormControl>
                                <hr/>

                                <TextField id="ciudad" className={classes.field} label="Ciudad*" color="secondary" />
                                <TextField id="pais" className={classes.field} label="País*" color="secondary" />
                                <TextField id="calle-numero" className={classes.field} label="Calle/Número*" color="secondary" />
                                <TextField id="barrio" className={classes.field} label="Barrio*" color="secondary" />

                            </Container>
                        </Paper>
                    </Grid>
                </Grid> 
            </div>
        </Container>
        
     );
}
 
export default PersonalForm;