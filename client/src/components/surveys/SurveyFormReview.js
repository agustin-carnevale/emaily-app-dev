import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) =>{

    const reviewFields = formFields.map(({label,name})=>{
            return (
                <div key={name}>
                    <label>{label}</label>
                    <p>{formValues[name]}</p>
                </div>
            );
    });
    
    return (
        <div style={{textAlign:'center',padding:'20px 10px'}}>
            <h5>Are you sure you want to send this email?
                Please confirm your entries and then press 'Send'.</h5>
            <div>
                {reviewFields}
            </div>

            <button className="btn waves-effect waves-light left" onClick={onCancel}>
                Back
            </button>
            <button className="btn waves-effect waves-light right" 
                    onClick={() => submitSurvey(formValues,history)}>
                Send <i className="material-icons right">send</i>
            </button>
        </div>
    );
    
}

function mapStateToProps(state){
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));