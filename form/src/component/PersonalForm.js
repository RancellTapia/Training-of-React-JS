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

const PersonalForm = ({ handleDataChange, data, handleSexoChange, sexo, handleBirthdateChange, birthdate }) => {
    const classes = useStyles();

    
  


    // const [ personalInfo, setPersonalInfo ] = useState({
    //     nombre: '',
    //     apellido: '',
    //     telefonofijo: '',
    //     telefonomovil: '',
    //     email: '',
    //     nacionalidad: '',
    //     sexo: '',
    //     ciudad: '',
    //     pais: '',
    //     callenumero: '',
    //     barrio: ''

    // });

    // const handleChangePersonalInfo = (event) => {
    //     event.preventDefault();
    //     setPersonalInfo({
    //         ...personalInfo,
    //         [event.target.name]: event.target.value
    //     });
    // };

    return ( 

        <Container>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <label className={classes.title}>Datos Personales</label>
                        <Paper className={classes.paper}>
                            <Container>
                                <TextField id="nombre" className={classes.field} label="Nombre*" color="secondary" name="nombre" value={data.nombre} onChange={handleDataChange}/>
                                <TextField id="apellido" className={classes.field} label="Apellido*" color="secondary" name="apellido" value={data.apellido} onChange={handleDataChange}/>
                                <TextField id="telefono-fijo" className={classes.field} label="Teléfono fijo" color="secondary" name="telefonofijo" value={data.telefonofijo} onChange={handleDataChange} />
                                <TextField id="telefono-movil" className={classes.field} label="Teléfono Movil*" color="secondary" name="telefonomovil" value={data.telefonomovil} onChange={handleDataChange}/>
                                <TextField id="email" className={classes.field} label="Email*" color="secondary" name="email" value={data.email} onChange={handleDataChange}/>
                                
                                <hr/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "birthdate"
                                        margin="normal"
                                        id="birthdate"
                                        label="Fecha de nacimiento"
                                        format="MM/dd/yyyy"
                                        value={birthdate}
                                        onChange={handleBirthdateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </MuiPickersUtilsProvider>

                                <TextField id="nacionalidad" className={classes.field} label="Nacionalidad*" color="secondary" name="nacionalidad" value={data.nacionalidad} onChange={handleDataChange}/>
                                
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sexo}
                                    onChange={handleSexoChange}
                                    >
                                    <MenuItem value={'femenino'}>Femenino</MenuItem>
                                    <MenuItem value={"masculino"}>Masculino</MenuItem>
                                    <MenuItem value={"otro"}>Otro</MenuItem>
                                    </Select>
                                </FormControl>
                                <hr/>

                                <TextField id="ciudad" className={classes.field} label="Ciudad*" color="secondary" name="ciudad" value={data.ciudad} onChange={handleDataChange}/>
                                <TextField id="pais" className={classes.field} label="País*" color="secondary" name="pais" value={data.pais} onChange={handleDataChange}/>
                                <TextField id="calle-numero" className={classes.field} label="Calle/Número*" color="secondary" name="callenumero" value={data.callenumero} onChange={handleDataChange}/>
                                <TextField id="barrio" className={classes.field} label="Barrio*" color="secondary" name="barrio" value={data.barrio} onChange={handleDataChange}/>

                            </Container>
                        </Paper>
                    </Grid>
                </Grid> 
            </div>
        </Container>
        
     );
}
 
export default PersonalForm;