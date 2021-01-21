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
       fontSize: '100px',
       paddingLeft: '35px'
     }}>Joshua Hurtado</h1>

     <p style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '65px',
       background: 'rgba( 255, 255, 255, 0.00 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 5.5px )',
        webkitBackdropFilter:' blur( 5.5px )',
        borderRadius: '10px',
        border:' 1px solid rgba( 255, 255, 255, 0.18 )',
        paddingLeft: '35px'
      }}>I am a React Developer that builds from the bottom up. 
     I start from the backend that include authentication, servers, hosts, 
     RestAPIs and middleware then work my way to the frontend.</p>

    <h2 style={{
      color: '#1985A1',
      fontFamily: 'Khula',
      fontSize: '55px',
      paddingLeft: '35px'
    }}>Skills</h2>
    <Grid {...grid} aria-label='My grid' >
      <GridRow {...grid} style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       display: 'grid',
       fontSize: '25px',
       paddingLeft: '35px'
      
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
       fontSize: '25px',
       paddingLeft: '35px'
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
       fontSize: '25px',
       paddingLeft: '35px'
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
       fontSize: '55px',
       paddingLeft: '35px'
    }}>Projects</h2>
      <p style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '25px',
       paddingLeft: '35px'
      }}><a href='http://firehouse-app.web.app' target='__blank' img='hotzone.png'>Hotzone</a></p>
      <p style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '25px',
       paddingLeft: '35px'
      }}><a href='http://todo-app-tau-ashen.vercel.app' target='__blank'>ToDo App</a></p>
      <>
      <Disclosure {...disclosure}>Contact</Disclosure>
      <DisclosureContent {...disclosure}>
      {(props) => disclosure.visible && <div {...props} style={{
       color: '#46494C',
       fontFamily: 'Nobile',
       fontSize: '20px',
       display: 'grid',
       paddingLeft: '35px'
      }}>
        josh.hurtado141@gmail.com
        <br/>
        <a href='http://www.github.com/jofhurtbot90' target='__blank'><i class="fab fa-github"></i></a>
        <br/>
         <a href='https://www.linkedin.com/in/jofhurtbot90/' target='__blank'><i class="fab fa-linkedin"></i></a>
      </div>} 
      
      </DisclosureContent>
      </>
   </Role> 
    </Provider>

  );
}

export default App;
