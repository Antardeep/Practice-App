//~~~~~~~~~~~~~~~~~~~~~~~~import library that helps to create components
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

//~~~~~~~~~~~~~~~~~~~~~~~~~make components
const Header = (pros) => {
    const { textStyle, viewStyle } = style;
    return (
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={viewStyle}>
        <Text style={textStyle}>{pros.headerText}</Text>
      </View>
      </SafeAreaView>
    );
  };

const style = {
 //  container: {
 //   flex: 1,
 //   backgroundColor: '#fff',
 //   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
 // },
  viewStyle: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
    color: '#E3EFF4'
  }
};

//~~~~~~~~~~~~~~~~~~~~~~~~~make components available to other parts of app
export {Header};
