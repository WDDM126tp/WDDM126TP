import React from 'react';
import ReactDOM from 'react-dom/client';
import NavLink from "./navlink";

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills navbar-dark bg-dark">
                    <li>
                        <a className="navbar-brand" style={{fontSize: "2rem"}}>Navigation</a>
                    </li>
                    <li>
                        <NavLink />
                    </li>
                    <li>
                        <NavLink />
                    </li>
                    <li>
                        <NavLink />
                    </li>
                </ul>
            </div>
        );
    }
}