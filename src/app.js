import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


const App = () => {
    return (
        //provider can only have one child - so wrapped it with view
        //flex:1 - 중간에 공간 잘리는것 해결
        <Provider store={createStore(reducers)}>
            <View style={{ flex:1 }}> 
                <Header headerText="Tech Stack" />    
                <LibraryList />
            </View>            
        </Provider>
    );
};

export default App;
