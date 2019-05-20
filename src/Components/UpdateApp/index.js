import React, { Component } from 'react';
import { View, Text,  Modal, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import CheckBox from '../Checkbox';

export default class UpdateApp extends Component {
	constructor(props){
		super(props);

		this.state = {
			checked: {
				clients: false,
				stock: false,
				clients: false,
				clients: false,
				clients: false
			}
		}
	}

	isChecked(item){
		const temp = this.state.checked[item];
		const itens = this.state.checked;
			  itens[item] = !temp;
		this.setState({checked: itens});
	}

	render(){
		return(
			<Modal
				transparent={true}
				visible={this.props.visible}
				animationType={this.props.animationType}
				onRequestClose={() => this.props.closeModal(false)}
			>
				<View style={styles.contentModal} >
					<View style={styles.contentTitle}>
						<Text style={styles.title}>Atualizações</Text>
						<TouchableOpacity 
							style={styles.btnClose}
							onPress={() => this.props.closeModal(false) }>
							<FontAwesome name="close" color="#FFFFFF" size={30} />
						</TouchableOpacity>
					</View>
					<View style={styles.contentItem}>
						<CheckBox
							checkedColor={this.props.color}
							containerStyle={styles.checkbox}
							title='Clientes'
							checked={this.state.checked.clients}
							onPress={()=> this.isChecked("clients") }
						/>
					</View>
					<View style={styles.contentItem}>
						<CheckBox
							checkedColor={this.props.color}
							containerStyle={styles.checkbox}
							title='Estoque e Financeiro'
							checked={this.state.checked.stock}
							onPress={()=> this.isChecked("stock") }
						/>
					</View>
					<View style={styles.contentItem}>
						<CheckBox
							checkedColor={this.props.color}
							containerStyle={styles.checkbox}
							title='Fotos'
							checked={this.state.checked.photos}
							onPress={()=> this.isChecked("photos") }
						/>
					</View>
					<View style={styles.contentItem}>
						<CheckBox
							checkedColor={this.props.color}
							containerStyle={styles.checkbox}
							title='Versão do Software'
							checked={this.state.checked.version}
							onPress={()=> this.isChecked("version") }
						/>
					</View>
					<View style={styles.contentItem}>
						<CheckBox
							checkedColor={this.props.color}
							containerStyle={styles.checkbox}
							title='Marketing'
							checked={this.state.checked.marketing}
							onPress={()=> this.isChecked("marketing") }
						/>
					</View>

					<TouchableOpacity 
						style={styles.btnUpdate}
						onPress={() => {}}>
						<Text style={styles.textUpdate}>Atualizar</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}
}