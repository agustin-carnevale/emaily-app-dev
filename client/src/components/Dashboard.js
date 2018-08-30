import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SurveysList from './surveys/SurveysList';

class Dashboard extends Component{

    render() {
        return (
            <div>
                <h3>Dashboard</h3>
                <h5>Take a look at the results so far..</h5>
               
                <SurveysList />

                <Link to='/surveys/new' className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></Link>
            </div>
        );
    }
}

export default Dashboard;