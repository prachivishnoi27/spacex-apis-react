import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LaunchList from './LaunchList';
import Launch from './Launch';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LaunchList} exact />
                <Route path="/:id" component={Launch} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;