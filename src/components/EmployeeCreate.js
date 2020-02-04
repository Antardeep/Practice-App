import React, { Component } from 'react';
import { Card, Button, CardSection } from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import  EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{

    onButtonPressed(){
        const { name, phone, shift } = this.props;
        
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render(){
        return(
            <Card>
                
                <EmployeeForm {...this.props } />

                <CardSection>
                    <Button argsOnPress={this.onButtonPressed.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const style = {
    pickerLabelStyle: {
        fontSize: 20,
        paddingLeft: 30
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return{
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);