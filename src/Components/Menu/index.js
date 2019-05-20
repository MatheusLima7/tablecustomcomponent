import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class Menu extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        const { activeItem, changeConfig } = this.props;
        return(
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, ( activeItem == 'todos' && styles.borderActiveItem) ]} onPress={() => { changeConfig("#000000", "todos") }}>
                    <Text style={[styles.text, ( activeItem == 'todos' && styles.colorActiveItem )]}>TODOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, ( activeItem == 'pre-venda' && styles.borderActiveItem)]} onPress={() => { changeConfig("#4A737E", "pre-venda") }}>
                    <Text style={[styles.text, ( activeItem == 'pre-venda' && styles.colorActiveItem )]}>PRÉ-VENDA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, ( activeItem == 'magazine' && styles.borderActiveItem)]}onPress={() => { changeConfig("#A75E3A", "magazine") }}>
                    <Text style={[styles.text, ( activeItem == 'magazine' && styles.colorActiveItem )]}>MAGAZINE & PCS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}