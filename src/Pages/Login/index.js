import React, { Component } from 'react';
import { View, Text, StatusBar, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import Spinner from 'react-native-spinkit';
import CustomModal from '../../Components/CustomModal';
import {TextField} from 'react-native-material-textfield';
import PasswordInputText from '../../Components/PasswordInputText';
import SampleButton from '../../Components/SampleButton';
import { connect } from 'react-redux';
import { Creators as LoginActions } from '../../Store/Ducks/login';
import { bindActionCreators } from 'redux';
import styles from './styles';

const logo = require('../../Assets/logo.png');
const imgBackground = require('../../Assets/background.png');
const error = require('../../Assets/erro.png');

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            message: '',
            title: '',
            infoLogin: {
                email: props.info.login.email,
                password: props.info.login.password,
                token: '',
                auth: false,
                debug: false
            },
            loading: false
        };

		this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount(){
        console.log(this.props)
    }


    authenticate = () => {
    	if(this.props.info.login.email == '' && this.props.info.login.password == ''){
    		this.setState({
    			modalVisible: true,
    			title: 'required',
    			message: 'Por favor, preencha o campo.'
    		}); 
    		return;
    	}

    	if(this.props.info.login.email == ''){
    		this.setState({
    			modalVisible: true,
    			title: 'email',
    			message: 'Por favor, preencha o e-mail.'
    		}); 
    		return;
    	}

    	if(this.props.info.login.password == ''){
    		this.setState({
    			modalVisible: true,
    			title: 'password',
    			message: 'Por favor, preencha a senha.'
    		}); 
    		return;
		}
			
    	// var obj = {
		// 		device_id: this.state.device_id,
		// 		pushToken: this.state.pushToken,
    	// 	email: this.props.info.login.email,
    	// 	password: this.props.info.login.password
		// 	};
			
		
		// 	this.setState({
		// 		loading: true
		// 	});

        // this.props.changeRequestInfoLogin(obj);
        
        this.props.navigation.navigate("Home");
        
    }

    async componentWillReceiveProps(props) {

		console.log("login");

    	if(props.info.status){

			if(props.info.status.page == "login"){

				this.openModal(
					props.info.status.error, 
					props.info.status.title, 
					props.info.status.message
					);
			} 
    	}
    }

    resetPassword = () => {
    	this.props.navigation.navigate('EsqueciSenhaEmail');
    }

    changeInfo = (prop, value) => {
    	let obj = this.state.infoLogin;
    	obj[prop] = value;
    	this.setState({ infoLogin: obj }, () => this.props.changeInfoLogin(obj)); 
    }

    openModal(flg, title, message) {
    	this.setState({ 
			loading: false,
			modalVisible: flg, 
			title: title, 
			message: message });
    }

    closeModal(isHide) {
    	this.setState({ modalVisible: isHide, loading: false });
    }

    render(){
        const { info } = this.props;
        return(
            <KeyboardAvoidingView 
                style={this.state.loading ? styles.loading : styles.project} 
                behavior="padding" 
                enabled>

                <ImageBackground
                    style={styles.project}
                    source={ imgBackground }
                >
    
                    <StatusBar hidden={true} />        
                    
                    {this.state.loading ? (
                            <Spinner 
                                isVisible={this.state.loading} 
                                size={100} 
                                type={'Wave'} 
                                color="#FFFFFF"
                            />
                    ) : (
                        <View style={styles.contentLogin}>

                            <View
                                style={styles.containerLogo}>
                                <Image source={ logo } style={ styles.technos } />
                            </View>
                            <View style={styles.containerLogin}>
                        
                                <View style={styles.viewTextInput}>
                                    <TextField
                                        label='Usuário'
                                        textColor="rgba(255, 255, 255, 1)"
                                        tintColor="rgba(255, 255, 255, 1)"
                                        baseColor="rgba(255, 255, 255, 1)"
                                        placeholderTextColor="rgba(255, 255, 255, 1)"
                                        titleColor="rgba(255, 255, 255, 1)"
                                        style={
                                            { color: "rgba(255, 255, 255, 1)" }
                                        }
                                        value={info.login.email} 
                                        onChangeText={(text) => this.changeInfo('email', text)  }
                                        style={styles.textInput}
                                    />
                                    {
                                        ((this.state.modalVisible) && (
                                            this.state.title == 'email'
                                        ||
                                        this.state.title == 'required'
                                        )) && (
                                            <View style={styles.viewError}>
                                                <Image source={ error }style={styles.iconError} />
                                                <Text style={styles.textError}>{this.state.message}</Text>
                                            </View>
                                        ) 
                                    }
                                </View>

                                <View style={styles.viewTextInput}>
                                    <PasswordInputText
                                        label='Senha'
                                        textColor="rgba(255, 255, 255, 1)"
                                        tintColor="rgba(255, 255, 255, 1)"
                                        baseColor="rgba(255, 255, 255, 1)"
                                        placeholderTextColor="rgba(255, 255, 255, 1)"
                                        titleColor="rgba(255, 255, 255, 1)"
                                        style={
                                            color="rgba(255, 255, 255, 1)"
                                        }
                                        iconColor="rgba(255, 255, 255, 1)"
                                        underlineColorAndroid={'transparent'}
                                        value={info.login.password} 
                                        onChangeText={(text) => this.changeInfo('password', text) } style={styles.textInput}
                                    />
                                    {
                                        ((this.state.modalVisible) && (
                                            this.state.title == 'password'
                                        ||
                                        this.state.title == 'required'
                                        )) && (
                                            <View style={styles.viewError}>
                                                <Image source={ error }style={styles.iconError} />
                                                <Text style={styles.textError}>{this.state.message}</Text>
                                            </View>
                                        )
                                    }
                                </View>
                
                                <SampleButton
                                    onPress={this.authenticate}
                                    background="#C41C17"
                                    color="#FFFFFF"
                                    textButton="ENTRAR"
                                />
                            </View>

                        </View>

                    ) }

                </ImageBackground>

                
                    {this.state.title == 'erro' && (
                        <CustomModal 
                            visible={this.state.modalVisible}
                            animationType="slide"
                            text="Entendi"
                            title={this.state.title}
                            message={this.state.message}
                            closeModal={this.closeModal}
                        />
                    ) } 

            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state =>(
	{
		info: state.login
	}
);

const mapDispatchToProps = dispatch => 
	bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);