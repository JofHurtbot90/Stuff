import React from 'react';
import ReactDOM from 'react-dom';
import Store from './context';
import reducer from './reducer';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import AppContextProvider, { AppContext } from './AppContext.js'
import { usePersistedContext, usePersistedReducer } from './usePersist';
import Signup from './Auth/Signup.js'
import Login from "./Auth/Login.js"
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ProtectedRoute from './Auth/ProtectedRoute';

// 

import App from './App';

function App() {
    
    const globalStore = usePersistedContext(useContext(AppContext), 'state');

    const [state, dispatch] = usePersistedReducer(
       useReducer(reducer, globalStore),
        'state'
    );

    return (
        <BrowserRouter>
            <AppContextProvider>
                <>
                <Switch>
                    <Route exact path="/" component={Signup} />
                    <Route path="/login" component={Login}/>
                    <ProtectedRoute path = '/todos'
                        component = {
                            TodoList
                        }
                        token={state.token}
                    />
                </Switch>
                </>
            </AppContextProvider>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));