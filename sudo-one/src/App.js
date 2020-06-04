import React from 'react';
import ReactDOM from 'react-dom';
import Store from './context';
import reducer from './reducer';

import { usePersistentContext, userPersistedReducer } from './usePersist';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import App from './App';

function App() {
    
    const globalStore = usePersistedContext(useContext(Store), 'state');

    const [state, dispatch] = usePersistedReducer(
        useReducer(reducer, globalStore),
        'state'
    );

    return (
        <Store.Provider value={{ state, dispatch}}>
            <TodoForm/>
            <TodoList/>
        </Store.Provider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));