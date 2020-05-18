import React from 'react';
import Stepperview from './component/Stepperview';
import image from './image/room.jpg';
import './App.css';
import Paper from '@material-ui/core/Paper';


const styles = {
  paperContainer: {
      minHeight: 960,
      margin: -24,
      padding: 24,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxWidth: `calc(98vw + 48px)`,
  }
};

function App() {
  return (
    <Paper style={styles.paperContainer}>
      <Stepperview/>
    </Paper>  
  );
}

export default App;
