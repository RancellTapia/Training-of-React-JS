import React from 'react';
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
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
    // return ['Select campaign settings', 'Datos Personales', 'Datos Laborales'];
    return['', '', ''];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <RDTrabaja/>;
      case 1:
        return <PersonalForm/>;
      case 2:
        return <JobForm/>;
      default:
        return 'Unknown step';
    }
  }

const Stepperview = () => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };


    return ( 
      <Container>
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                    <div>
                        <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                        >
                        Atras
                        </Button>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                        >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
                        </Button>
                    </div>
                    </div>
                </StepContent>
                </Step>
            ))}
            </Stepper>
            {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} className={classes.button}>
                Reset
                </Button>
            </Paper>
            )}
        </div>
      </Container>
     );
}
 
export default Stepperview;