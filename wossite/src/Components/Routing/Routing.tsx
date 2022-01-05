import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

export default class Routing extends React.Component{
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    
                </Routes>

            </Router>
        )
    }
}