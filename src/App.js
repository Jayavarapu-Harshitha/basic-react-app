import logo from './logo.svg';
import './App.css';
import kl from './kl logo.jpg';
import Button from '@material-ui/core/IconButton';
import {ComputerScience,Electrical,Mechanical,BioTech,kluniversity} from './data';
import { useState } from 'react';
import { ButtonGroup, Card,ListItem, Typography} from '@material-ui/core';

  function App() {
    const [change,Setchange]=useState(ComputerScience)
    
  return (
    <div>
      <Card variant="outlined"  color="secondary">
    <div class="card"> 
      <div id="nav">
      <ButtonGroup aria-label="outlined secondary button group" variant="contained" size="medium">
        <Button color="primary" onClick={() => Setchange(ComputerScience)}  > CSE</Button>
        <Button color="secondary" variant="contained" onClick={() => Setchange(Electrical)} > ECE</Button>
        <Button color="primary"  onClick={() => Setchange(Mechanical)}> ME</Button>
        <Button color="secondary"onClick={() => Setchange(BioTech)}> BT</Button> 
        </ButtonGroup>
      </div>
      <div className="department"><b>{change[0].uuid}</b> &nbsp; {change[0].displayName}</div>
      <img src={change[0].imageUrl} alt=" "/><br/>
     <b className="dep">{change[0].description}</b><br/>
     
     <b className="HOD">HOD: {change[0].hod}.</b><br/>
     Programs Offered
     {
     change.length ?

          change.map(t => <li key={t} >{t.programsOffered}</li>):null }
    </div> 
    </Card>
    </div>
  );
}

export default App
