import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import './Header.css';

class HeaderBar extends Component{

    renderContent(){
        switch (this.props.auth){
            case null:
                return "loading..";
            case false:
                return (<li><a href="/auth/google">Login With Google</a></li>);
            default:
                return (<li><a href="/api/logout">Logout</a></li>);
        }
    }

    render() {
        return (
            <React.Fragment>
            <header className="App-header">
                <Link to={ this.props.auth? '/surveys':'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
            </header>
            <nav>
                <div className="nav-wrapper">
                    <Link to={ this.props.auth?  '/surveys':'/'} className="left brand-logo">
                    <i className="material-icons">apps</i>EMAILY</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(HeaderBar);