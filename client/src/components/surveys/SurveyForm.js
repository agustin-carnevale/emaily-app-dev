import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component{
    
    renderFields(){
      return formFields.map(({label,name})=> 
        <Field  component={SurveyField} 
                type="text" 
                label={label} 
                name={name} 
                key={name} />
      );
    }

    render() {
        return (
            <div>
                <h3>Survey Form</h3>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to='/surveys' className="btn waves-effect waves-light left">
                        Cancel
                    </Link>
                    <button className="btn waves-effect waves-light right" type="submit">
                        Preview
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors ={};
    
    formFields.forEach(({name})=>{
        if(!values[name]){
            errors[name]='You must provide a value';
        }
    });

    if (values.recipients)
        errors.recipients = validateEmails(values.recipients);

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);