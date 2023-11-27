import React from "react";
import Links from './Link';
import { BrowserRouter as Router } from "react-router-dom";

function Sidebar(){
    return (
        <Router>
        <section className='link_sidebar'>
            <Links />
        </section>
        </Router>
)}

export default Sidebar;