import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Content from "./components/Content/Content";
import Rectangle from "./components/Rectangle";

function App() {
    return (
        <div className="App">
            <div className={"wrapper"}>
                <Header/>
                <Content/>
                <Rectangle/>
                <footer className={"footer"}>
                    Footer
                </footer>
            </div>
        </div>
    );
}

export default App;
