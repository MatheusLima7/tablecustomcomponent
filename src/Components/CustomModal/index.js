import React, { Component } from 'react';
import { View, Text, ListItem,  Modal, TouchableOpacity } from 'react-native';
import style from './styles';

export default class CustomModal extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Modal
				transparent={true}
				visible={this.props.visible}
				animationType={this.props.animationType}
				onRequestClose={() => this.props.closeModal(false)}
			>
				<View style={style.contentModal} >
					<View style={style.message}>
						<Text style={style.textMessage}>{this.props.message}</Text>
					</View>

					<TouchableOpacity 
						style={style.btnModal}
						onPress={() => this.props.closeModal(false)}>
						<Text style={style.btnClose}>{this.props.text}</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}
}