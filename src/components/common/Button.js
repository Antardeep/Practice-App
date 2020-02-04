import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ argsOnPress, children }) => {
  return (
    <TouchableOpacity onPress={argsOnPress} style={style.buttonStyle}>
      <Text style={style.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowradius: 2,
    flex: 1
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'steelblue',
    //textAlign: 'center'
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5

  }
};

export {Button};
