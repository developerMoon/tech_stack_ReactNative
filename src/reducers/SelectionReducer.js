export default (state=null, action) => {
    //console.log(action) //console에 무엇이 클릭되었는지 출력
    //return null; //do not currently have row selected
    //let it return selected library
    switch (action.type){
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};