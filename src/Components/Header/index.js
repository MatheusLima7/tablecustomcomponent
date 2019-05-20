import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const logo = require('../../Assets/logo-interna.png');

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        const { title, background, menu, navigation, arrow, shopping } = this.props;
        return(
            <View style={[styles.container, (background ? { backgroundColor: background } :  { backgroundColor: "#000000" }) ]}>
                <TouchableOpacity  style={styles.menu} onPress={()=>{ menu ? null : navigation.goBack() }}>
                    <FontAwesome name={menu ? "bars" : (arrow ? "arrow-left" : "close")} color="#FFFFFF" size={30} />
                </TouchableOpacity>
                { menu && (
                    <View style={styles.logo}>
                        <Image style={styles.imgLogo} source={logo} />
                    </View>
                )}
                <Text style={[styles.title, (!menu && { flex: 8}) ]}>{title}</Text>
                {(shopping) && (
                    <TouchableOpacity style={styles.icons} onPress={()=> this.props.navigateToPage("ShoppingCart")}>
                        <FontAwesome name="shopping-cart" color="#FFFFFF" size={40}/>
                    </TouchableOpacity>
                )}
                { menu && (
                <Fragment>
                    <TouchableOpacity style={styles.icons} onPress={()=> this.props.navigateToPage("Notifications")} >
                        <FontAwesome name="bell"  color="#FFFFFF" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons} onPress={()=> this.props.updateModal(true) } >
                        <FontAwesome name="refresh"  color="#FFFFFF" size={40} />
                    </TouchableOpacity>
                </Fragment>
                 )}
            </View>
        )
    }
} 