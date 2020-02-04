import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component{
    componentWillMount(){
        const firebaseConfig = {
            apiKey: 'AIzaSyAsDnuDi-L65eUTBR-kHG7Cg2Mcr_uVruM',
            authDomain: 'manager-c9043.firebaseapp.com',
            databaseURL: 'https://manager-c9043.firebaseio.com',
            projectId: 'manager-c9043',
            storageBucket: 'manager-c9043.appspot.com',
            messagingSenderId: '209759938669',
            appId: '1:209759938669:web:c3c02447b62df870'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render(){
        return(
            <Provider store = { createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}
 export default App;