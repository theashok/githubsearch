import React from 'react';
import './App.css';
import GithubSearchApp from "./components/GithubSearchApp";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-secondary text-white navbar-expand-sm">
                    <a href="/" className='navbar-brand'>Github Profile Search App</a>
                </nav>

                <GithubSearchApp/>
            </div>
        );
    }

}
export default App;
