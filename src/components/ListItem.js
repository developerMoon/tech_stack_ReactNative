import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux'; 
import { CardSection, Card } from './common';
import * as actions from '../actions'; //take everything from ../actions and call it actions

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring(); //added animation
    }
    //helper method
    renderDescription(){
        const { library, expanded } = this.props;

        if(expanded) {
            return (
            //flex:1 option - don't cut your text, let it take space
                <CardSection>
                    <Text style={{flex: 1}}> 
                        {library.description} 
                    </Text>
                </CardSection>
            );
        }
    }
    render(){
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        //사용자가 선택한 아이템 보여주도록
        return(               
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}> 
                            {title} 
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles={
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
//interface from application level state -> component level
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded }; //stated.selectedLibraryId === ownProps.library.id; 라면 t/f
    //assigned SelectionReducer to selectedLibraryId in index.js
};

export default connect(mapStateToProps, actions)(ListItem);