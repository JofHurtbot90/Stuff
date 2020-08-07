import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppContextProvider } from './AppContext.js'
import { BrowserRouter} from 'react-router-dom'

ReactDOM.render( 

        <BrowserRouter>
            <AppContextProvider>
                <App/>
            </AppContextProvider>
        </BrowserRouter>, document.getElementById('root'));