import React, { Component } from 'react';
import { View, Picker, Platform } from 'react-native';

const style = {
    item: {
        marginLeft: 20
    }
}

export default class CustomFilter extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { options, flexStyle, filterSelected, changeFilter, height } = this.props;
        return(
            <View style={{ flex: flexStyle, height: height }}>
                <Picker
                        headerBackButtonText="Voltar"
                        placeholder="Selecione"
                        iosHeader="Selecione"
                        mode="dropdown"
                        headerStyle={{ backgroundColor: "#B0AAA0" }}
                        headerBackButtonTextStyle={{ color: "#000" }}
                        headerTitleStyle={{ color: "#B0AAA0" }}
                        style={{ 
                            backgroundColor: "#B0AAA0",
                            height: height,  
                            color: "#FFFFFF"
                        }}
                        itemStyle={style.item}
                        itemTextStyle={style.item}
                        textStyle={style.item}
                        selectedValue={filterSelected}
                        onValueChange={changeFilter}
                    >
                    {  options.map((item, index) => (
                    <Picker.Item key={index} label={item.heading} value={item.property} />
                    )) }
                </Picker>
            </View>
        )
    }
}