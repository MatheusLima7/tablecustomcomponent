import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const banner = require('../../Assets/banner.png');

export default class Banner extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const { title, text } = this.props;
        return(
            <ImageBackground style={styles.imageBackground} source={banner}>
                <View style={styles.contentBackground}>
                    <Text style={styles.title}>{title.toUpperCase()}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </ImageBackground>
        )
    }
}