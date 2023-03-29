import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navigation from './Navigation';
import SubPage from './SubPage';
import AnotherRandomPage from './AnotherRandomPage';


function App() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    let pageToBeRendered = null;
    if (randomNumber % 2 === 0) {
        pageToBeRendered = <SubPage />
    } else {
        pageToBeRendered = <AnotherRandomPage />
    }

    return (
        <main>
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <Home>
                            {pageToBeRendered}
                        </Home>
                    </Route>
                    <Route path="/about">
                        <FirstPage/>
                    </Route>
                    <Route path="/users">
                        <SecondPage/>
                    </Route>
                </Switch>
            </Router>
        </main>
    );
}

export default App;
