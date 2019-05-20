import React, { Component, Fragment } from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';
import Header from '../../Components/Header';

import { connect } from 'react-redux';
import { Creators as NotificationsActions } from '../../Store/Ducks/notifications';
import { bindActionCreators } from 'redux';

import styles from './styles';

class Notifications extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    componentWillMount(){
        this.props.updateNotifications()
    }

    render(){
        return(
            <ScrollView>
                <Header
                    menu={false}
                    navigateToPage={this.navigateToPage}
                    navigation={this.props.navigation}
                    title="NOTIFICAÇÕES" 
                    background={this.props.config.colors.header}
                />
                {(this.props.notifications.length > 0 && (
                    <FlatList
                        style={{flex: 1, 
                            flexDirection: "row" }}
                        numColumns
                        ref={(ref) => { this.flatListRef = ref; }}
                        contentContainerStyle={{width:'100%', height: (this.props.notifications.length * 120), paddingBottom: 20 }}
                        initialScrollIndex={0}
                        initialNumToRender={0}
                        getItemLayout={(data, index) => {return { length: 60, offset: 60 * index, index }}}
                        data={this.props.notifications}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                                <View style={styles.notification}>
                                    <View style={styles.space}></View>
                                    <View style={styles.contentText}>
                                        <Text style={[styles.title, (item.read && { fontWeight: "bold" } )]}>{item.title && item.title.toUpperCase()}</Text>
                                        <Text style={[styles.subtitle, (item.read && { fontWeight: "bold" } )]}>{item.subtitle}</Text>
                                    </View>
                                </View>
                            )}
                            {...this.props}
                        />
                ))}
                
            </ScrollView>
        )
    }
}

const mapStateToProps = state =>(
	{
        notifications: state.notifications,
        config: state.config
	}
);

const mapDispatchToProps = dispatch => 
	bindActionCreators(NotificationsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);