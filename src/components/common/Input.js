import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {inputStyle, labelStyle, containerStyle} = style;

    return(
        <View style = { containerStyle }>
            <Text style = { labelStyle }>{ label }</Text>
            <TextInput 
            secureTextEntry={ secureTextEntry }
            placeholder = { placeholder }
            autoCorrect = { false }
            style = { inputStyle }
            value = { value }
            onChangeText = { onChangeText }/>
        </View>
    );
};

const style = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        lineHeight: 25,
        flex: 2
    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 30,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    }
}

export { Input };