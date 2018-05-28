import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({ //how this will show up on stage
    libraries: LibraryReducer, //values of LibraryReducer
    selectedLibraryId: SelectionReducer //default : null
}); 



