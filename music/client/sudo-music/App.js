import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import Registration from './pages/Registration';

const AppWrapper = styled.div``;

const page404 = () => {
    return (
        <h3>404 - Not found</h3>
    );
};

function App(props) {
    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <ThemeProvider>
            <AppWrapper>
                <GlobalStyle />
                <Switch>

                <Route exact path="/" render={ ()=> user ? <Homepage/> : <Redirect to="/registration"/> }
                />
                <Route exact path="/registration" render={ ()=> user ? <Redirect to="/"/> : <Registration/> }
                />
                <Route path='/artists/{artist_id}' render={ ()=> user ? <ArtistPage/> : <Redirect to='/'/> }
                />
                <Route path='/artists/{artist_id}/releases{?sort,sort_order}' render={()=> user ? <ArtistPage/> : <Redirect to='/'/> }
                />
                <Route path='/labels/{label_id}' render={() => user ? <LabelPage/> : <Redirect to='/'/> }
                />
                <Route path='/labels/{label_id}/releases{?page,per_page}' render={()=> user ? <LabelPage/> : <Redirect to='/'/> }
                />
                
                <Route path="*" component={page404} />

                </Switch>
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;