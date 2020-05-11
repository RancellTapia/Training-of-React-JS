import React from 'react';
import { 
    Paper, 
    Grid, 
    makeStyles, 
    Container, 
    TextField,
    FormControl,
    InputLabel,
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
        // margin: theme.spacing(1),
        minWidth: 150,
        margin: (10, 0, 0, 20),
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

const JobForm = ( props ) => {
    const classes = useStyles();
  
    return ( 

        <Container>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <label className={classes.title}>Datos Laborales</label>
                            <Container>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Nivel Académico</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="level"
                                    value={props.level}
                                    onChange={props.handleLevelChange}
                                    >
                                    <MenuItem value={'basico'}>Básico</MenuItem>
                                    <MenuItem value={'bachiller'}>Bachiller</MenuItem>
                                    <MenuItem value={'tecnico'}>Técnico</MenuItem>
                                    <MenuItem value={'tecnologo'}>Tecnólogo</MenuItem>
                                    <MenuItem value={'universitario'}>Universitario</MenuItem>
                                    <MenuItem value={'master'}>Master</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField id="titulo" className={classes.field} label="Título" color="secondary" name="titulo" value={props.titulo} onChange={props.handleDataChange}/>
                                <br/>
                                <TextField id="habilidad1" className={classes.field} label="Habilidad 1" color="secondary" name="habilidad1" value={props.habilidad1} onChange={props.handleDataChange}/>
                                <TextField id="habilidad2" className={classes.field} label="Habilidad 2" color="secondary" name="habilidad2" value={props.habilidad2} onChange={props.handleDataChange}/>
                                <TextField id="habilidad3" className={classes.field} label="Habilidad 3" color="secondary" name="habilidad3" value={props.habilidad3} onChange={props.handleDataChange}/>
                                <TextField id="habilidad4" className={classes.field} label="Habilidad 4" color="secondary" name="habilidad4" value={props.habilidad4} onChange={props.handleDataChange}/>
                                <TextField id="habilidad5" className={classes.field} label="Habilidad 5" color="secondary" name="habilidad5" value={props.habilidad5} onChange={props.handleDataChange}/>

                                <hr/>

                                <TextField id="puesto1" className={classes.field} label="Puesto 1" color="secondary" name="puesto1" value={props.puesto1} onChange={props.handleDataChange}/>
                                <TextField id="empresa1" className={classes.field} label="Empresa" color="secondary" name="empresa1" value={props.empresa1} onChange={props.handleDataChange}/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "startdate1"
                                        margin="normal"
                                        id="startdate1"
                                        label="Fecha de inicio"
                                        format="MM/dd/yyyy"
                                        value={props.startdate1}
                                        onChange={props.handleStartDate1}
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
                                        value={props.finishdate1}
                                        onChange={props.handleFinishDate1}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </MuiPickersUtilsProvider>

                                <hr/>

                                <TextField id="puesto2" className={classes.field} label="Puesto 2" color="secondary" name="puesto2" value={props.puesto2} onChange={props.handleDataChange}/>
                                <TextField id="empresa2" className={classes.field} label="Empresa" color="secondary" name="empresa2" value={props.empresa2} onChange={props.handleDataChange}/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "startdate2"
                                        margin="normal"
                                        id="startdate2"
                                        label="Fecha de inicio"
                                        format="MM/dd/yyyy"
                                        value={props.startdate2}
                                        onChange={props.handleStartDate2}
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
                                        value={props.finishdate2}
                                        onChange={props.handleFinishDate2}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </MuiPickersUtilsProvider>

                                <hr/>

                                <TextField id="puesto3" className={classes.field} label="Puesto 3" color="secondary" name="puesto3" value={props.puesto3} onChange={props.handleDataChange}/>
                                <TextField id="empresa3" className={classes.field} label="Empresa" color="secondary" name="empresa3" value={props.empresa3} onChange={props.handleDataChange}/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "startdate3"
                                        margin="normal"
                                        id="startdate3"
                                        label="Fecha de inicio"
                                        format="MM/dd/yyyy"
                                        value={props.startdate3}
                                        onChange={props.handleStartDate3}
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
                                        value={props.finishdate3}
                                        onChange={props.handleFinishDate3}
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
        </Container>
     );
}
 
export default JobForm;