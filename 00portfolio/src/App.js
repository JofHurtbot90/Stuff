import React from 'react';
import { Provider } from 'reakit';
import { Role } from 'reakit/Role';
import {
  unstable_useGridState as useGridState,
  unstable_Grid as Grid,
  unstable_GridRow as GridRow,
  unstable_GridCell as GridCell,
} from "reakit/Grid";
import {
  useDisclosureState,
  Disclosure,
  DisclosureContent,
} from "reakit/Disclosure";


function App() {
  const grid = useGridState();
  const disclosure = useDisclosureState();
  return (

    <Provider>
      <Role>
     <h1 style={{
       color: '#1985A1',
       fontFamily: 'Khula',
       fontSize: '100px'
     }}>Joshua Hurtado</h1>

     <p style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '65px'
      }}>I am a Javascript Developer and Backend Developer that builds from the bottom up. 
     I start from the backend that include authentication, servers, hosts, 
     RestAPIs and middleware then work my way to the frontend.</p>

    <h2 style={{
      color: '#1985A1',
      fontFamily: 'Khula',
      fontSize: '55px'
    }}>Skills</h2>
    <Grid {...grid} aria-label='My grid' >
      <GridRow {...grid} style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       display: 'grid',
       fontSize: '25px'
      
      }}>
        <GridCell {...grid}>Javascript</GridCell>
        <GridCell {...grid}>Node.js</GridCell>
        <GridCell {...grid}>React</GridCell>
        <GridCell {...grid}>MongoDB</GridCell>
      </GridRow>
      <GridRow {...grid} style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       display: 'grid',
       fontSize: '25px'
      }}>
        <GridCell {...grid}>Git</GridCell>
        <GridCell {...grid}>GitHub</GridCell>
        <GridCell {...grid}>HTML</GridCell>
        <GridCell {...grid}>CSS</GridCell>
      </GridRow>
      <GridRow {...grid} style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       display: 'grid',
       fontSize: '25px'
      }}>
        <GridCell {...grid}>Express</GridCell>
        <GridCell {...grid}>Mongoose</GridCell>
        <GridCell {...grid}>OAuthentication</GridCell>
        <GridCell {...grid}>Token Authentication</GridCell>
      </GridRow>
    </Grid>

    <h2 style={{
      color: '#1985A1',
       fontFamily: 'Khula',
       fontSize: '55px'
    }}>Projects</h2>
      <p style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '25px'
      }}><a href='http://firehouse-app.web.app' target='__blank'>Firehouse App</a></p>
      <p style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '25px'
      }}>ToDo App</p>
      <>
      <Disclosure {...disclosure}>Contact</Disclosure>
      <DisclosureContent {...disclosure}>
      {(props) => disclosure.visible && <div {...props} style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '20px',
       display: 'grid'
      }}>
        josh.hurtado1990@gmail.com
        <br/>
        <a href='http://www.github.com/jofhurtbot90' target='__blank'>GitHub</a>
        <br/>
         <a href='https://www.linkedin.com/in/jofhurtbot90/' target='__blank'>LinkedIn</a>
      </div>} 
      
      </DisclosureContent>
      </>
   </Role> 
    </Provider>

  );
}

export default App;
