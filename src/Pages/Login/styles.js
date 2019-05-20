import { fonts } from '../../Styles';

export default {
	project: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff'
	},
	content: {
		flex: 2
	},
	areaButton: {
		flex: 1
	},
	technos: {
		width: 465,
		height: 89,
		marginBottom: 20,
		alignSelf: "center"
	},
	welcomeapp: {
		fontSize: 28,
		width: 190,
		color: '#404040',
		// fontFamily: fonts.open400,
		fontWeight: "500"
	},
	intro: {
		// fontFamily: fonts.open400,
		fontSize: 16,
		color: '#858585',
		marginTop: 15,
		marginBottom: 15,
		fontWeight: "600"
	},
	key: {
		alignSelf: 'center',
		color: '#ffffff',
		padding: 10
	},
	containerLogo: {
		flex: 2,
		alignItems: "flex-start"
	},
	containerLogin: {
		flex: 8
	},
	contentLogin: {
		width: 465,
		alignSelf: "center",
		paddingTop: 150
	},
	labelInput:{
		flexDirection: 'row',
		fontSize: 16,
		marginBottom: 10,
		textAlign: 'left',
		borderRadius: 4,
	},
	viewTextInput: {
		position: 'relative',
	},
	textInput:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		fontSize: 16,
		marginBottom: 10,
		textAlign: 'left',
		color: '#ffffff',
		height: 40,
		width: '100%'
	},
	btnLogarContent:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#D63D33', 
		alignSelf: 'center',
		marginTop: 30,
		height: 48,
		width: '100%',
		borderRadius: 40
	},
	textBtnLogar: {
		color: '#ffffff',
		fontSize: 16
	},
	btnLogar:{
		color: '#000000', 
		fontSize: 12,
		paddingLeft: 20, 
		paddingRight: 20
	},
	btnResetPassword:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		height: 40,
		width: 240
	},
	txtResetPassword: {
		fontSize: 16,
		marginTop: 20,
		color: '#2A4896',
		fontWeight: "600"
	},
	loading: {
		flex: 1,
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'center' 
	},
	viewError: {
		flexDirection: 'row',
    	alignItems: 'center'
	},
	iconError: {  
		width: 16,
		height: 16,
		marginRight: 10
	},
	textError: {
		fontSize: 12,
		color: '#E74C3C',
		// flex: 9
	}
};
