import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";

const App = (p) => {

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Nav />
                    <div className="app-wrapper-content">
                        <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route exact path='/profile' render={() => <Profile/>}/>
                        <Route exact path='/music' render={() => <Music/>}/>
                        <Route exact path='/news' render={() => <News/>}/>
                        <Route exact path='/settings' render={() => <Settings/>}/>
                        <Route exact path='/friends' render={() => <UsersContainer />}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    };

    export default App;
