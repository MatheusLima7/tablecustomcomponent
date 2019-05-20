import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class CustomSearch extends Component{
    constructor(props){
        super(props)
        this.changeText = this.changeText.bind(this)
    }

    changeText(text, bool){
        this.props.changeSearch( String(text), (text != '' ? (bool) : true) );
    }

    render(){
        const { search, flexStyle, height } = this.props;
        return(
            <View style={[styles.search, { flex: flexStyle }]}>
                <FontAwesome 
                    style={styles.icon}
                    name="search" 
                    color="#757575" 
                    size={24} />
                <TextInput
                    style={[styles.text, { height: height }]}
                    onChangeText={(text) => this.changeText(text, false) }
                    value={search}
                />
            </View>
        )
    }
    
}