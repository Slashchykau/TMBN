import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Firends/Friends";


const App = (p) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state = {p.props.sidebarFriends}/>
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs' render={() => <Dialogs state={p.props.dialogsPage} />}/>
                    <Route exact path='/profile' render={() => <Profile state={p.props.profilePage} newPost={p.newPost}/>}/>
                    <Route exact path='/music' render={() => <Music/>}/>
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                    <Route exact path='/friends' render={() => <Friends state = {p.props.sidebarFriends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
