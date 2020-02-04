import React, { Component } from 'react';
import {View , Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeFrom extends Component{
    render(){
        return(
            <View>
                <CardSection>
                <Input
                        label="Name"
                        placeholder="name"
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value}) }
                        value={ this.props.name } 
                    />
                </CardSection>
            
                <CardSection>
                <Input
                        label="Phone"
                        placeholder="000-000-0000"
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value }) }
                        value={ this.props.phone } 
                    />
                </CardSection>
                
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={style.pickerLabelStyle}>Shift</Text>
                    <Picker
                        //style={{ flex: 1}}
                        selectedValue={ this.props.shift }
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day }) }
                    >
                        <Picker.Item  label="Monday" value="Monday" />
                        <Picker.Item  label="Tuesday" value="Tuesday" />
                        <Picker.Item  label="Wednesday" value="Wednesday" />
                        <Picker.Item  label="Thursday" value="Thursday" />
                        <Picker.Item  label="Friday" value="Friday" />
                        <Picker.Item  label="Saturday" value="Saturday" />
                        <Picker.Item  label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>

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
    const{ name, phone, shift } = state.employeeForm;

    return{ name, phone, shift};
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeFrom);