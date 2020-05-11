import React from 'react';
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

const PersonalForm = ( props ) => {
    const classes = useStyles();

    return ( 

        <Container>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <label className={classes.title}>Datos Personales</label>
                            <Container>
                                <TextField id="nombre" className={classes.field} label="Nombre*" color="secondary" name="nombre" value={props.nombre} onChange={props.handleDataChange}/>
                                <TextField id="apellido" className={classes.field} label="Apellido*" color="secondary" name="apellido" value={props.apellido} onChange={props.handleDataChange}/>
                                <TextField id="telefono-fijo" className={classes.field} label="Teléfono fijo" color="secondary" name="telefonofijo" value={props.telefonofijo} onChange={props.handleDataChange} />
                                <TextField id="telefono-movil" className={classes.field} label="Teléfono Movil*" color="secondary" name="telefonomovil" value={props.telefonomovil} onChange={props.handleDataChange}/>
                                <TextField id="email" className={classes.field} label="Email*" type="email" color="secondary" name="email" value={props.email} onChange={props.handleDataChange}/>
                                
                                <hr/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "birthdate"
                                        margin="normal"
                                        id="birthdate"
                                        label="Fecha de nacimiento"
                                        format="MM/dd/yyyy"
                                        value={props.birthdate}
                                        onChange={props.handleBirthdateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </MuiPickersUtilsProvider>

                                <TextField id="nacionalidad" className={classes.field} label="Nacionalidad*" color="secondary" name="nacionalidad" value={props.nacionalidad} onChange={props.handleDataChange}/>
                                
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={props.sexo}
                                    onChange={props.handleSexoChange}
                                    >
                                    <MenuItem value={'femenino'}>Femenino</MenuItem>
                                    <MenuItem value={"masculino"}>Masculino</MenuItem>
                                    <MenuItem value={"otro"}>Otro</MenuItem>
                                    </Select>
                                </FormControl>
                                <hr/>

                                <TextField id="ciudad" className={classes.field} label="Ciudad*" color="secondary" name="ciudad" value={props.ciudad} onChange={props.handleDataChange}/>
                                <TextField id="pais" className={classes.field} label="País*" color="secondary" name="pais" value={props.pais} onChange={props.handleDataChange}/>
                                <TextField id="calle-numero" className={classes.field} label="Calle/Número*" color="secondary" name="callenumero" value={props.callenumero} onChange={props.handleDataChange}/>
                                <TextField id="barrio" className={classes.field} label="Barrio*" color="secondary" name="barrio" value={props.barrio} onChange={props.handleDataChange}/>

                            </Container>
                        </Paper>
                    </Grid>
                </Grid> 
            </div>
        </Container>
        
     );
}
 
export default PersonalForm;