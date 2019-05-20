import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Creators as ConfigActions } from '../../Store/Ducks/config';
import { bindActionCreators } from 'redux';

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import Banner from '../../Components/Banner';
import Cards from '../../Components/Cards';
import UpdateApp from '../../Components/UpdateApp';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards: props.config.cards,
            update: false,
            loading: false
        }

        this.navigateToPage = this.navigateToPage.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount(){

    }

    navigateToPage(page){
        this.props.navigation.navigate(page);
    }

    changeConfig = (color, filter) => {
        this.props.updateConfig({ color: color, filter: filter})
    }

    closeModal(isHide) {
    	this.setState({ update: isHide, loading: false });
    }

    updateModal(flg){
        this.setState({ update: flg });
    }

    render(){
        return(
            <ScrollView>
                <Header
                    updateModal={this.updateModal.bind(this)}
                    menu={true}
                    navigateToPage={this.navigateToPage}
                    title="FORÇA DE VENDA" 
                    shopping={true}
                    background={this.props.config.colors.header}
                />
                <Menu 
                    activeItem={this.props.config.filter}
                    changeConfig={this.changeConfig}
                />
                <Banner
                    title="NOSSA HISTÓRIA"
                    text="Conheça a história da nossa empresa"
                />

                <Cards 
                    navigateToPage={this.navigateToPage}
                    cards={this.state.cards}
                    filter={this.props.config.filter}
                    background={this.props.config.colors.cards}
                />
                <UpdateApp 
                    color={this.props.config.colors.cards}
                    visible={this.state.update}
                    animationType="slide"
                    closeModal={this.closeModal}
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = state =>(
	{
		config: state.config
	}
);

const mapDispatchToProps = dispatch => 
	bindActionCreators(ConfigActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);