import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, Button, CardSection, Input, Spinner } from './common';

class LoginForm extends Component{
    onEmailChanged(text){
        this.props.emailChanged(text);
    }
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }
    onButtonPressed(){
        const { email, password } = this.props;
        
        this.props.loginUser({ email, password });
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundolor: 'white' }}>
                    <Text style={style.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />
        }   
        return(
            <Button argsOnPress = {this.onButtonPressed.bind(this)}>
                        Login
                    </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={ this.props.email } 
                    />
                </CardSection>
             
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password" 
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={ this.props.password }
                    />
                </CardSection>

                { this.renderError()}

                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const style ={
    errorTextStyle: {
        fontSize: 10,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    
    return{
        email,
        password,
        error,
        loading

        ///..................when not using destructuring
        // email: state.auth.email,
        // password: state.auth.password,
        // error: state.auth.error
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);