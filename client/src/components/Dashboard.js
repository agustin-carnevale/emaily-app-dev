import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component{

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h3>Take a look at the results..</h3>

                <Link to='/surveys/new' className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></Link>
            </div>
        );
    }
}

export default Dashboard;