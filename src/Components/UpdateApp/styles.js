import { fonts } from '../../Styles';

export default {
	icon: {
		color: '#000000', 
		fontSize: 60,
	},
	contentModal: {
		backgroundColor: '#FFFFFF',
		top: 130,
		width: "70%",
		alignSelf: "center",
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6
	},
	btnClose: {
		color: '#2A4896', 
		fontSize: 16,
		position: "absolute",
		right: 30,
		top: 30
	},
	contentTitle: {
		backgroundColor: "#4A4A4A",
		color: "#ffffff",
		padding: 30,
		marginBottom: 30
	},
	title: {
		color: "#FFFFFF",
		fontSize: 30
	},
	contentItem: {
		flexDirection: 'row',
		paddingLeft: 30,
		paddingRight: 30,
	},
	item: {
		fontSize: 20,
		color: "#404040",
		fontFamily: fonts.open400
	},
	btnUpdate: {
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: '#C41C17', 
		alignSelf: 'flex-end',
		marginRight: 30,
		marginBottom: 30
	},
	textUpdate: {
		color: '#FFFFFF',
		fontSize: 20,
		alignSelf: "center"
	},
	checkbox: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderWidth: 0
	}
};