import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  table: {
    paddingTop: 30,
    width: "100%"
  },
  row: {
    paddingTop: Platform.OS === 'ios' ? 0 : 7,
    borderColor: '#ffffff',
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "#fd7033"
  },
  header: {
    justifyContent: 'center'
  },
  property: {
    alignSelf: 'center',
  },
  styleBorderHeader: {
    borderTopWidth: 0.5, 
    borderRightWidth: 0.5, 
    borderRightColor: '#ffffff', 
    borderTopColor: '#ffffff',
    height: 500
  },
  textPropertyStore: {
    fontSize: 10,
    color: '#242424',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center',
    top: 7
  },
  headerAnyProperty: {
    backgroundColor: 'transparent',
    paddingRight: 10,
    borderColor: '#ffffff',
    justifyContent: 'center'
  },
  textHeaderProperty: {
    width: "100%",
    fontSize: 10,
    paddingLeft: 5,
    color: '#242424',
    alignSelf: 'center'
  },
  textAnyProperty: {
    fontSize: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#242424',
    alignSelf: 'center'
  },
  iconArrow: {
    color: "#ffffff",
    fontSize: 14,
    position: 'absolute',
    left: 300,
    top: 5
  },
  titleDetail: {
    color: '#ffffff', 
    fontWeight: '700', 
    alignSelf: 'center', 
    textAlign: 'center', 
    fontSize: 12,
    marginRight: 20,
    lineHeight: null,
    height: 25
  },
  titleDetailStyle: {
    backgroundColor: '#5a4272', 
    paddingTop: 4, 
    paddingBottom: 4
  },
  pagination: {
    flex: 1,
    width: "100%",
    flexDirection: "row"
  },
  page: {
    width: 40, 
    height: 40, 
    borderWidth: 0.1,
    borderColor: "rgba(1,1,1,0.1)",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
    elevation: 2,
    marginRight: 10,
    borderRadius: 3
  },
  buttonPage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row"
  },
  numberPage: {
    width: "100%",
    textAlign: "center",
    color: "#4A4A4A",
    fontSize: 18
  }
});

export default styles;