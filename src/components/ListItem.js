import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
 
class ListItem extends Component {

  onRowPress(){

    Actions.employeeEdit({employees: this.props.employees});
  }

  render() {
   const { name } = this.props.employees;
 
    return (
      
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={style.titleStyles}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };
};
 
const style = {
  titleStyles: {
    fontSize: 20,
    paddingLeft: 15,
    color: 'steelblue',
    fontWeight: 'bold'
  }
}
 
export default ListItem;