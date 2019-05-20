import React, { Component, Fragment  } from "react";
import Grid from '../Grid';
import Col from '../Col';
import Row from '../Row';
import { Platform, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import style from './styles';
import { findIndex } from 'lodash';

import { connect } from 'react-redux';
import { Creators as ConfigActions } from '../../Store/Ducks/config';
import { bindActionCreators } from 'redux';

class Table extends Component  {
  constructor(props){
    super(props);

    this.state = { 
      schema: props.schema
    };
  }


  componentDidMount(){
  }

  getStyleStriped = (option, heightRow, background1, background2) => {
    if(option){
      return{
        backgroundColor: background1,
        height: heightRow
      }
    } else{
      return{
        backgroundColor: background2,
        height: heightRow
      }
    }
  }

  getProperty = (width, height) => {
    return{
      backgroundColor: '#EBEBEB',
      width: width,
      height: height,
      borderRightWidth: 0.5,
      borderRightColor: '#ffffff',
      alignItems: 'center'
    }
  }
  
  getTextProperty = (pos) => {
    return {
      width: '100%',
      textAlign: 'center',
      alignSelf: 'center',
      top: pos
    }
  }

  getValueColumn = (item, properties, fontSize) => {  
        return <Text style={[style.textAnyProperty, { fontSize: fontSize }]}>{item[properties.property]}</Text>
      
  }

  contentPage(index){
    return(
        <TouchableOpacity 
          style={style.buttonPage}
          onPress={()=> this.props.toPage(index)}>
          <Text style={style.numberPage}>{index+1}</Text>
        </TouchableOpacity>
    )
  }

  pagination(pages){

    let content = [];
    for(var i = 0; i < pages; i++){
      content.push(<View key={i} style={style.page}>
        {
          this.contentPage(i)
        }
      </View>)
    }
    return <View style={[style.pagination]}>
            <View style={{ 
              flex: 6, 
              flexDirection: "row" 
            }}>
            {content}
            </View>
            {this.props.children}
          </View>;
  }

  render() {
    const { colorHeader, fontHeader, fontValues, heightRow, borderRightWidth, borderBottomWidth, detailItem, pages, page, limit, background1, background2, backgroundHeader, search } = this.props;
    return (
      <View style={[
              style.table, 
              { height: ((heightRow + borderBottomWidth) * (limit+1)) + 30 }
            ]}>
      
          <Grid>
                <Col size={6} 
                    style={{
                        height: 600, 
                        borderRightWidth: borderRightWidth, 
                        borderColor: "#ffffff" 
                      }}>
                      <Grid>
                        <Row  style={[
                            style.header, 
                            { 
                              height: heightRow, 
                              borderBottomWidth: borderBottomWidth, 
                              borderColor: "#ffffff"
                            },
                            backgroundHeader && ( { backgroundColor: backgroundHeader} )
                          ]}>
                          <Text 
                            style={[ 
                              style.property,
                              {
                                fontSize: fontHeader,
                                color: colorHeader
                              }
                            ]}>
                            {this.props.schema.length > 0 && this.props.schema[0].heading}
                          </Text>
                        </Row>
                        <Row>
                          <FlatList
                            getItemLayout={(data, index) => {return { length: heightRow, offset: heightRow * index, index }}}
                            keyExtractor={(item, index) => index.toString()}
                            data={this.props.values}
                            renderItem={({ item, index }) => (
                              <View style={[ style.row, this.getStyleStriped( ( (index % 2) == 0 ), heightRow, background1, background2 ), {  
                                borderBottomWidth: borderBottomWidth, 
                                borderColor: '#ffffff'  } ]}>
                                  <TouchableOpacity
                                    style={{
                                      position: "absolute",
                                      borderRightWidth: borderRightWidth,
                                      borderColor: "#ffffff",
                                      height: heightRow,
                                      flexDirection: "row",
                                      alignItems: "center",
                                      width: 34
                                    }}
                                    onPress={() => 
                                      this.props.updateTableConfig({
                                        property: detailItem,
                                        value: item[this.props.schema[0].property]
                                      })
                                  }
                                  >
                                      <View
                                          style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: 12,
                                            backgroundColor: "#ffffff",
                                            left: 10,
                                            zIndex: 0
                                          }}
                                          
                                        >
                                          { (this.props.config.tables[detailItem] != null) && (
                                            (this.props.config.tables[detailItem] == item[this.props.schema[0].property]) && (
                                              <View
                                                style={{
                                                  position: "absolute",
                                                  height: 8,
                                                  backgroundColor: "#333",
                                                  width: 8,
                                                  margin: 2,
                                                  borderRadius: 8
                                                }}
                                              >
                                              </View>
                                            )
                                          ) 
                                        }
                                      </View>
                                  </TouchableOpacity>
                                  <Text style={[
                                      style.property, 
                                      { fontSize: fontValues, marginLeft: 24 }
                                    ]}>
                                    {item[this.props.schema[0].property]}
                                  </Text>
                              </View>
                            )}
                          />
                        </Row>
                      </Grid>
                                          
                      
              </Col>
              <Col size={9} style={style.styleBorderHeader}>
                <ScrollView horizontal>
                  <Grid>
                    <Row  style={{ height: heightRow,   }}>
                        {
                          this.props.schema.map((item, i) => (
                            (findIndex(this.props.values, item.property) != -1) && (
                              (i != 0 && (
                                <Col key={i} style={[
                                      style.header, this.getProperty(200,  heightRow), {
                                      borderRightWidth: borderRightWidth,
                                      borderBottomWidth: borderBottomWidth, 
                                      borderColor: "#ffffff",
                                      width: item.width                              
                                    },
                                    backgroundHeader && ( { backgroundColor: backgroundHeader} )
                                  ]}>
                                  <Text style={
                                    [
                                      style.property, this.getTextProperty(2), 
                                      {
                                        fontSize: fontHeader,
                                        color: colorHeader
                                      }
                                    ] }>
                                    {item.heading}
                                  </Text>
                                </Col>
                              ))
                            )
                          ))
                        }
                    </Row>
                    <Row>
                        <FlatList
                            data={this.props.values}
                            getItemLayout={(data, index) => {return { length: heightRow, offset: heightRow * index, index }}}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                              <Row style={{ 
                                    height: heightRow, 
                                    backgroundColor: ((index % 2) == 0) ? background1 : background2,
                                    borderRightWidth: borderRightWidth, 
                                    borderBottomWidth: borderBottomWidth, 
                                    borderColor: '#ffffff'
                                  }}>
                                {
                                  this.props.schema.map((properties, i) => (
                                    (i != 0 && (
                                      <Col key={i} style={[
                                        style.headerAnyProperty, {
                                        borderRightWidth: borderRightWidth,
                                        borderColor: '#ffffff',
                                        width: properties.width
                                      }]}>
                                        { 
                                          this.getValueColumn(item, properties, fontValues) 
                                        }
                                      </Col>
                                    ))
                                  ))
                                }
                              </Row>
                            )}
                          />
                      </Row>
                    </Grid>
                  </ScrollView>
              </Col>
            </Grid>
            <ScrollView 
              horizontal
              style={{
                width: "100%",
                bottom: -10,
                position: "absolute"
              }}>
              { this.pagination(pages) }
            </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state =>(
	{
		config: state.config
	}
);

const mapDispatchToProps = dispatch => 
	bindActionCreators(ConfigActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Table);