import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './styles';

const objImages = {
    clients: require(`../../Assets/clients.png`),
    categories: require(`../../Assets/categories.png`),
    catalog: require(`../../Assets/catalog.png`),
    myOrders: require(`../../Assets/myOrders.png`),
    mySales: require(`../../Assets/mySales.png`)
}

export default class Cards extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
    }
    
    render(){
        const { cards, filter, background } = this.props;
        return(
            <View style={styles.container}>
                { cards.filter((item) => (item.filters.indexOf(filter) != -1) ).map((item, index)=>(
                        <TouchableOpacity key={index} style={styles.card} onPress={()=> this.props.navigateToPage(item.page) }>
                            <View style={[styles.contentCard, (background ? { backgroundColor: background } :  { backgroundColor: "#000000" }) ]}>
                                <Image style={styles.image} source={objImages[item.icon]}/>
                                <View style={styles.textContent}>
                                    <Text style={styles.title}>{item.title}</Text> 
                                    <Text style={styles.subtitle}>{item.subtitle}</Text> 
                                </View> 
                            </View>     
                        </TouchableOpacity>
                ))}
            </View>
        )
    }
}