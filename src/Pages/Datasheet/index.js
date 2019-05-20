import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../Components/Header';

import { connect } from 'react-redux';

class Datasheet extends Component{
    constructor(props){
        super(props)

        this.navigateToPage = this.navigateToPage.bind(this);
    }

    navigateToPage(page){
        this.props.navigation.navigate(page);
    }

    render(){
        return(
            <View>
                <Header
                    menu={false}
                    navigateToPage={this.navigateToPage}
                    navigation={this.props.navigation}
                    arrow={true}
                    title="FICHA TÉCNICA"
                    shopping={true}
                    background={this.props.config.colors.header}
                />
            </View>
        )
    }
}


const mapStateToProps = state =>(
	{
		config: state.config
	}
);

export default connect(mapStateToProps, null)(Datasheet);