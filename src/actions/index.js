export const selectLibrary = (libraryId) => { 
    //this function: action creator-returns object
    //need to wire up actioncreator
    //when i want to export a lot- just use export / not export default ~~
    return {
        type: 'select_library', //action
        payload: libraryId
    };
};