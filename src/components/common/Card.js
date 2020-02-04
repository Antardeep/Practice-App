import React from 'react';
import { View } from 'react-native';

const Card = (pros) => {
  return (
    <View style={style.containerStyle}>
    {pros.children}
    </View>
  );
};

const style = {
  containerStyle: {
    backgroundColor: '#fff',
    borderColor: 'skyblue',
    borderWidth: 0.5,
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowradius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export {Card};
