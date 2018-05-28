import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount(){
        //boilerplate setup
        //시범용 앱을 설정하기 위한 것이므로 꼭 이해할 필요는 없음
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    //render single row
    renderRow(library){
        return <ListItem library={library} />; //꼭 library라 부르지 않아도 됨
    }

    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }; //libraries : 이름은 맘대로
};

export default connect(mapStateToProps)(LibraryList);


