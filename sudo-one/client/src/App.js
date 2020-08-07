import React, { useContext, useReducer } from 'react';
import Store from './context';
import reducer from './reducer';
import { Switch, Route} from 'react-router-dom'
import { AppContext } from './AppContext.js'
import { usePersistedContext, usePersistedReducer } from './usePersist';
import Signup from './Auth/Signup.js'
import Login from "./Auth/Login.js"
import { TodoList } from './components/TodoList';
//import TodoForm from './components/TodoForm';
import ProtectedRoute from './Auth/ProtectedRoute';



 export const App = () => {
    
    const globalStore = usePersistedContext(useContext(AppContext), 'state');

    const [state, dispatch] = usePersistedReducer(useReducer(reducer, globalStore), 'state');

    return (
        
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
            
    );
};

