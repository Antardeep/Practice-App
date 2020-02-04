import _ from 'lodash';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{

    state = { showModal: false }

    componentWillMount(){
        _.each(this.props.employees, (value, prop) => { this.props.employeeUpdate({ prop, value }); } );
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employees.uid});
    }

    onTextPressed(){
        const{ phone, shift } =this.props;
        Communications.text(phone,`Your upcoming shift is on ${shift}`)
    }

    onAccept(){
        this.props.employeeDelete({ uid: this.props.employees.uid });
    }

    onDecline(){
        this.setState({ showModal: false });
    }

    render(){
        return(
            <Card>
                <EmployeeForm {...this.props }  />
                
                <CardSection>
                    <Button argsOnPress = { this.onButtonPress.bind(this) }> 
                        Save Changes
                    </Button>
                
                </CardSection>

                <CardSection>
                    <Button argsOnPress = {this.onTextPressed.bind(this) }>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button argsOnPress = {() => this.setState({ showModal: !this.state.showModal }) }>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm 
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);