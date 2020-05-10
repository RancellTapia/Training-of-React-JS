import React, { useState } from 'react';
import {sendData} from '../service/form.service';
import PersonalForm from './PersonalForm';
import JobForm from './JobForm';
import RDTrabaja from './RDTrabaja';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 90,
  
  },
  opa: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    opacity: 0.9,
  },
}));

function getSteps() {
    // return ['Select campaign settings', 'Datos Personales', 'Datos Laborales'];
    return['', '', ''];
  }
  


const Stepperview = () => {

    const classes = useStyles();
    const steps = getSteps();
    const [ activeStep, setActiveStep ] = useState(0);
    const [ sexo, setSexo ] = useState('');
    const [ birthdate, setBirthdate ] = useState(new Date());

    const [ startdate1, setStartdate1 ] = useState(new Date());
    const [ startdate2, setStartdate2 ] = useState(new Date());
    const [ startdate3, setStartdate3 ] = useState(new Date());

    const [ finishdate1, setFinishdate1 ] = useState(new Date());
    const [ finishdate2, setFinishdate2 ] = useState(new Date());
    const [ finishdate3, setFinishdate3 ] = useState(new Date());

    const [ level, setLevel] = useState('');

    const nivel = level;

    const [ data, setData] = useState({
      nombre: '',
      apellido: '',
      telefonofijo: '',
      telefonomovil: '',
      email: '',
      nacionalidad: '',
      ciudad: '',
      pais: '',
      callenumero: '',
      barrio: '',
      titulo: '',
      habilidad1: '',
      habilidad2: '',
      habilidad3: '',
      habilidad4: '',
      habilidad5: '',
      puesto1: '',
      empresa1: '',
      puesto2: '',
      empresa2: '',
      puesto3: '',
      empresa3: ''
    });


    

    const handleSexoChange = (event) => {
      setSexo(event.target.value);
    };
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const handleBirthdateChange = date => {
      setBirthdate(date);
    
    };

  const handleStartDate1 = date => {
    setStartdate1(date);
  };

  const handleStartDate2 = date => {
      setStartdate2(date);
  };

  const handleStartDate3 = date => {
      setStartdate3(date);
  };

  const handleFinishDate1 = date => {
      setFinishdate1(date);
  };

  const handleFinishDate2 = date => {
      setFinishdate2(date);
  };

  const handleFinishDate3 = date => {
      setFinishdate3(date);
  };

  const handleLevelChange = event => {
    setLevel(event.target.value);
};

    const handleDataChange = (event) => {
      event.preventDefault();
      setData({
          ...data,
          [event.target.name]: event.target.value
      });
  };

  const test = async (e) => {
    e.preventDefault();

    
    try {

      await sendData({
        ...data,
        birthdate: birthdate,
        sexo: sexo,
        startdate1: startdate1,
        startdate2: startdate2,
        startdate3: startdate3,
        finishdate1: finishdate1,
        finishdate2: finishdate2,
        finishdate3: finishdate3,
        nivel: nivel
      })

      window.alert("Los datos se han enviado!")

    } catch (error) {
        console.log(error);
        window.alert("Error al enviar los datos.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <RDTrabaja/>;
      case 1:
        return <PersonalForm 
                  handleDataChange={handleDataChange}
                  data={data}
                  handleSexoChange={handleSexoChange}
                  sexo={sexo}
                  handleBirthdateChange={handleBirthdateChange}
                  birthdate={birthdate}
              />;
      case 2:
        return <JobForm
                  handleDataChange={handleDataChange}
                  data={data}
                  startdate1={startdate1}
                  startdate2={startdate2}
                  startdate3={startdate3}
                  finishdate1={finishdate1}
                  finishdate2={finishdate2}
                  finishdate3={finishdate3}
                  handleStartDate1={handleStartDate1}
                  handleStartDate2={handleStartDate2}
                  handleStartDate3={handleStartDate3}
                  handleFinishDate1={handleFinishDate1}
                  handleFinishDate2={handleFinishDate2}
                  handleFinishDate3={handleFinishDate3}
                  handleLevelChange={handleLevelChange}
                  level={level}
                />;
      default:
        return 'Unknown step';
    }
  }

    return ( 
      <Container>
        <div >
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.opa}>
            {steps.map((label, index) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                    <Typography component={'span'} >{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                    <div>
                        <Button
                        disabled={activeStep === 0}
                        variant="contained"
                        color="primary"
                        onClick={handleBack}
                        className={classes.button}
                        >
                        Atras
                        </Button> 
                        
                        {activeStep === steps.length - 1 ? 
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={test}
                        className={classes.button}
                        >
                        Enviar
                        </Button>
                        : 
                        
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                        >
                        Siguiente
                        </Button>}

                    </div>
                    </div>
                </StepContent>
                </Step>
            ))}
            </Stepper>
            {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
                <Typography >Usted ha completado todos los pasos!</Typography>
                <Button onClick={handleReset} className={classes.button}>
                Resetear
                </Button>
            </Paper>
            )}
        </div>
      </Container>
     );
}
 
export default Stepperview;