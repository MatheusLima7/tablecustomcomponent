import { fonts } from '../../Styles';

export default {
	icon: {
		color: '#000000', 
		fontSize: 60,
	},
	message: {
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentModal: {
		backgroundColor: '#FFFFFF',
		left: 10,
		right: 10,
		bottom: 30,
		padding: 20,
		borderRadius: 20,
		position: 'absolute',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6
	},
	btnModal: {
		width: "100%",
		padding: 10,
		borderRadius: 30,
		borderWidth: 0.3,
		borderColor: "#2A4896",
		backgroundColor: '#FFFFFF', 
		alignSelf: 'center', 
		alignItems: 'center'
	},
	btnClose: {
		color: '#2A4896', 
		fontSize: 16,
		fontFamily: fonts.open400
	},
	title: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	textTitle: {
		lineHeight: 60,
		paddingLeft: 20,
		fontSize: 20
	},
	textMessage: {
		fontSize: 16,
		color: "#404040",
		fontFamily: fonts.open400
	}
};