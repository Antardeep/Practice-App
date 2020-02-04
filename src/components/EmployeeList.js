import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeeFetch } from '../actions';
import  ListItem  from './ListItem';


class EmployeeList extends Component{

componentWillMount() {
    this.props.employeeFetch();
}


renderItem({ item } ){
       
    return <ListItem employees = {item} />;
}

// createDataSource({ employees }){                                     //listView deprecated
//     const ds = new ListView.DataSource({
//         rowHasChanged: (r1,r2) => r1 != r2
//     });
//     this.dataSource = ds.cloneWithRows(employees);
// }

    render(){
        console.log(this.props.employees);
        return(
            <FlatList 
                data={this.props.employees} 
                renderItem={ this.renderItem }
                keyExtractor={employee => employee.uid}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid };
    });
  
    return { employees };
  };


export default connect(mapStateToProps, { employeeFetch })(EmployeeList);