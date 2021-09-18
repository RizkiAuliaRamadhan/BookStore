// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './reducer/store';
import {NativeBaseProvider} from 'native-base';
import firebase from '@react-native-firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCwOYLzC3Esp9_aI45yQETzHVorHFFOpx0',
  authDomain: 'bookstore-37e79.firebaseapp.com',
  projectId: 'bookstore-37e79',
  storageBucket: 'bookstore-37e79.appspot.com',
  messagingSenderId: '783491495925',
  appId: '1:783491495925:web:3a6459dc1fbd1fbf35d2bc',
}

if(!firebase.app.length) {
  firebase.initializeApp(firebaseConfig)
}

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
