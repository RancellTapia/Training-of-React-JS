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
    Button
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
      marginTop: 90,
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
    send: {
        background: 'linear-gradient(45deg,  #6200ea 30%, #b388ff 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(98, 0, 234, .3)',
        color: 'white',
        height: 48,
        padding: '0 60px',
        margin: (0, 0, 0, 30),
        fontSize: 20,
    },
    align: {
        textAlign: 'center',
    }
  }));

const PersonalForm = () => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState({
        birthdate: new Date(),
        startdate1: new Date(),
        finishdate1: new Date(),
        startdate2: new Date(),
        finishdate2: new Date(),
        startdate3: new Date(),
        finishdate3: new Date()

    });
  
    const handleDateChange = date => {
      setSelectedDate({
          ...selectedDate,
          [date.target.name]:date.target.value
      });
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
                                    value={selectedDate.birthdate}
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
                <Grid item xs>
                    <label className={classes.title}>Datos Laborales</label>
                    <Paper className={classes.paper}>
                        <Container>
                            <TextField id="puesto1" className={classes.field} label="Puesto 1" color="secondary" />
                            <TextField id="empresa1" className={classes.field} label="Empresa" color="secondary" />

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    name= "startdate1"
                                    margin="normal"
                                    id="startdate1"
                                    label="Fecha de inicio"
                                    format="MM/dd/yyyy"
                                    value={selectedDate.startdate1}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                            </MuiPickersUtilsProvider>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    name= "finishdate1"
                                    margin="normal"
                                    id="finishdate1"
                                    label="Fecha de finalización"
                                    format="MM/dd/yyyy"
                                    value={selectedDate.finishdate1}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                            </MuiPickersUtilsProvider>

                            <hr/>

                            <TextField id="puesto2" className={classes.field} label="Puesto 2" color="secondary" />
                            <TextField id="empresa2" className={classes.field} label="Empresa" color="secondary" />

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    name= "startdate2"
                                    margin="normal"
                                    id="startdate2"
                                    label="Fecha de inicio"
                                    format="MM/dd/yyyy"
                                    value={selectedDate.startdate2}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                            </MuiPickersUtilsProvider>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    name= "finishdate2"
                                    margin="normal"
                                    id="finishdate2"
                                    label="Fecha de finalización"
                                    format="MM/dd/yyyy"
                                    value={selectedDate.finishdate2}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                            </MuiPickersUtilsProvider>

                            <hr/>

                            <TextField id="puesto3" className={classes.field} label="Puesto 3" color="secondary" />
                            <TextField id="empresa3" className={classes.field} label="Empresa" color="secondary" />

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    name= "startdate3"
                                    margin="normal"
                                    id="startdate3"
                                    label="Fecha de inicio"
                                    format="MM/dd/yyyy"
                                    value={selectedDate.startdate3}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                            </MuiPickersUtilsProvider>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    name= "finishdate3"
                                    margin="normal"
                                    id="finishdate3"
                                    label="Fecha de finalización"
                                    format="MM/dd/yyyy"
                                    value={selectedDate.finishdate3}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                            </MuiPickersUtilsProvider>
                            
                        </Container>
                    </Paper>
                </Grid>
                </Grid>
            </div>
            <div className={classes.align}>
                <Button className={classes.send} >Enviar</Button>
            </div>
       
        </Container>
        
     );
}
 
export default PersonalForm;