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

const JobForm = ({ handleDataChange, 
                    data,
                    startdate1,
                    startdate2,
                    startdate3,
                    finishdate1,
                    finishdate2,
                    finishdate3,
                    handleStartDate1,
                    handleStartDate2,
                    handleStartDate3,
                    handleFinishDate1,
                    handleFinishDate2,
                    handleFinishDate3
                 }) => {
    const classes = useStyles();

    // const [ startdate1, setStartdate1 ] = useState(new Date());
    // const [ startdate2, setStartdate2 ] = useState(new Date());
    // const [ startdate3, setStartdate3 ] = useState(new Date());

    // const [ finishdate1, setFinishdate1 ] = useState(new Date());
    // const [ finishdate2, setFinishdate2 ] = useState(new Date());
    // const [ finishdate3, setFinishdate3 ] = useState(new Date());

    // const [ jobInfo, setJobInfo ] = useState({
    //     level: '',
    //     titulo: '',
    //     habilidad1: '',
    //     habilidad2: '',
    //     habilidad3: '',
    //     habilidad4: '',
    //     habilidad5: '',
    //     puesto1: '',
    //     empresa1: '',
    //     puesto2: '',
    //     empresa2: '',
    //     puesto3: '',
    //     empresa3: ''

    // });
  
    // const handleStartDate1 = date => {
    //     setStartdate1(date);
    // };

    // const handleStartDate2 = date => {
    //     setStartdate2(date);
    // };

    // const handleStartDate3 = date => {
    //     setStartdate3(date);
    // };

    // const handleFinishDate1 = date => {
    //     setFinishdate1(date);
    // };

    // const handleFinishDate2 = date => {
    //     setFinishdate2(date);
    // };

    // const handleFinishDate3 = date => {
    //     setFinishdate3(date);
    // };

    // const handleChangeJobInfo = (event) => {
    //     event.preventDefault();
    //     setJobInfo({
    //         ...jobInfo,
    //         [event.target.name]: event.target.value
    //     });
    // };
  
    return ( 

        <Container>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <label className={classes.title}>Datos Laborales</label>
                        <Paper className={classes.paper}>
                            <Container>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Nivel Académico</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="level"
                                    value={data.level}
                                    onChange={handleDataChange}
                                    >
                                    <MenuItem value={'basico'}>Básico</MenuItem>
                                    <MenuItem value={'bachiller'}>Bachiller</MenuItem>
                                    <MenuItem value={'tecnico'}>Técnico</MenuItem>
                                    <MenuItem value={'tecnologo'}>Tecnólogo</MenuItem>
                                    <MenuItem value={'universitario'}>Universitario</MenuItem>
                                    <MenuItem value={'master'}>Master</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField id="titulo" className={classes.field} label="Título" color="secondary" name="titulo" value={data.titulo} onChange={handleDataChange}/>
                                <br/>
                                <TextField id="habilidad1" className={classes.field} label="Habilidad 1" color="secondary" name="habilidad1" value={data.habilidad1} onChange={handleDataChange}/>
                                <TextField id="habilidad2" className={classes.field} label="Habilidad 2" color="secondary" name="habilidad2" value={data.habilidad2} onChange={handleDataChange}/>
                                <TextField id="habilidad3" className={classes.field} label="Habilidad 3" color="secondary" name="habilidad3" value={data.habilidad3} onChange={handleDataChange}/>
                                <TextField id="habilidad4" className={classes.field} label="Habilidad 4" color="secondary" name="habilidad4" value={data.habilidad4} onChange={handleDataChange}/>
                                <TextField id="habilidad5" className={classes.field} label="Habilidad 5" color="secondary" name="habilidad5" value={data.habilidad5} onChange={handleDataChange}/>

                                <hr/>

                                <TextField id="puesto1" className={classes.field} label="Puesto 1" color="secondary" name="puesto1" value={data.puesto1} onChange={handleDataChange}/>
                                <TextField id="empresa1" className={classes.field} label="Empresa" color="secondary" name="empresa1" value={data.empresa1} onChange={handleDataChange}/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "startdate1"
                                        margin="normal"
                                        id="startdate1"
                                        label="Fecha de inicio"
                                        format="MM/dd/yyyy"
                                        value={startdate1}
                                        onChange={handleStartDate1}
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
                                        value={finishdate1}
                                        onChange={handleFinishDate1}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </MuiPickersUtilsProvider>

                                <hr/>

                                <TextField id="puesto2" className={classes.field} label="Puesto 2" color="secondary" name="puesto2" value={data.puesto2} onChange={handleDataChange}/>
                                <TextField id="empresa2" className={classes.field} label="Empresa" color="secondary" name="empresa2" value={data.empresa2} onChange={handleDataChange}/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "startdate2"
                                        margin="normal"
                                        id="startdate2"
                                        label="Fecha de inicio"
                                        format="MM/dd/yyyy"
                                        value={startdate2}
                                        onChange={handleStartDate2}
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
                                        value={finishdate2}
                                        onChange={handleFinishDate2}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                </MuiPickersUtilsProvider>

                                <hr/>

                                <TextField id="puesto3" className={classes.field} label="Puesto 3" color="secondary" name="puesto3" value={data.puesto3} onChange={handleDataChange}/>
                                <TextField id="empresa3" className={classes.field} label="Empresa" color="secondary" name="empresa3" value={data.empresa3} onChange={handleDataChange}/>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        name= "startdate3"
                                        margin="normal"
                                        id="startdate3"
                                        label="Fecha de inicio"
                                        format="MM/dd/yyyy"
                                        value={startdate3}
                                        onChange={handleStartDate3}
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
                                        value={finishdate3}
                                        onChange={handleFinishDate3}
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