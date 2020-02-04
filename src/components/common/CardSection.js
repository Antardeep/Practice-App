import React from 'react';
import { View } from 'react-native';
const CardSection = (props) => {
  return (
    <View style={[style.containerStyle, props.style]}>
    {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    backgroundColor: '#E3EFF4',
    borderBottomWidth: 1,
    padding: 3,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7
  }
};

export {CardSection};
