import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'; 

const styles = { 
    container: {
        left: "15.5%", 
        position: "absolute", 
        backgroundColor: "transparent", 
        width: "100%", 
        zIndex: 199
    }
}   

export default class SearchResult extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { values, filterSelected, top, height, search, changeSearch } = this.props;
        return(
            <ScrollView style={[styles.container, { top: top, height: height } ]}>
                { (this.props.search.length > 0) && (
                        values.filter((item, index, array) => { 
                        const temp = String(item[filterSelected]).toUpperCase();
                        const response = temp.indexOf(search.toUpperCase()) != -1;
                        return response;
                            }).map((item, index)=>(
                                <View
                                    key={index}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "#FFFFFF"
                                        }}
                                        onPress={
                                            () => changeSearch(String(item[filterSelected]), true, 'close')
                                        } 
                                        >
                                        <Text style={{ padding: 15, color: "#4A4A4A", fontSize: 20 }}>{item[filterSelected]}</Text> 
                                    </TouchableOpacity>
                                </View>
                            )
                        )
                    )}
            </ScrollView>
        )
    }
}