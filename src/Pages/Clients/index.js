import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { chunk } from 'lodash';

import { connect } from 'react-redux';
import { Creators as ConfigActions } from '../../Store/Ducks/config';
import { bindActionCreators } from 'redux';

import Table from '../../Components/Table';
import styles from './styles';

const  limit = 10;

class Clients extends Component{
    constructor(props){
        super(props)
        this.state = {
            table: [],
            page: 0,
            pages: 0,
            filter: "cod",
            search: "",
            visibleTable: true,
            instruction: 'close',
            schema: [
                // {
                //     property: "cod",
                //     heading: "Código",
                //     width: 60,
                //     selected: false 
                // },
                // {
                //     property: "socialName",
                //     heading: "Razão Social",
                //     width: 220,
                //     selected: false 
                // },
                // {
                //     property: "uf",
                //     heading: "UF",
                //     width: 90,
                //     selected: false 
                // },
                // {
                //     property: "county",
                //     heading: "Município",
                //     width: 200,
                //     selected: false 
                // },
                // {
                //     property: "address",
                //     heading: "Endereço",
                //     width: 360,
                //     selected: false 
                // },
                // {
                //     property: "cnpj",
                //     heading: "CNPJ",
                //     width: 220,
                //     selected: false 
                // },
                // {
                //     property: "test",
                //     heading: "Teste",
                //     width: 220,
                //     selected: false 
                // },
                // {
                //     property: "model",
                //     heading: "Modelo",
                //     width: 80,
                //     selected: false
                // }
              ],
            values: [
                // {
                //     cod: 1,
                //     socialName: "Interprise LTDA",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     test: "edrerer",
                //     model: "645"
                // },
                // {
                //     cod: 2,
                //     socialName: "AM4",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     test: "edrerer",
                //     model: "645"
                // },
                // {
                //     cod: 3,
                //     socialName: "Agência Maior",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     test: "edrerer",
                //     model: "645"
                // },
                // {
                //     cod: 4,
                //     socialName: "DMP Comunicação",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     test: "edrerer",
                //     model: "645"
                // },
                // {
                //     cod: 5,
                //     socialName: "Fulllab",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     test: "edrerer",
                //     model: "645"
                // },
                // {
                //     cod: 6,
                //     socialName: "Icons",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     test: "edrerer",
                //     model: "645"
                // },
                // {
                //     cod: 7,
                //     socialName: "Sellbie",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     test: "edrerer",
                //     model: "645"
                // }
                // ,
                // {
                //     cod: 8,
                //     socialName: "Empresa Qualquer",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     model: "645"
                // },
                // {
                //     cod: 9,
                //     socialName: "Teste",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     model: "645"
                // },
                // {
                //     cod: 10,
                //     socialName: "Outro",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     model: "645"
                // }
                // ,
                // {
                //     cod: 11,
                //     socialName: "Vamo que vamo",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     model: "645"
                // },
                // {
                //     cod: 12,
                //     socialName: "Empresa LTDA",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado ",
                //     model: "645"
                // },
                // {
                //     cod: 13,
                //     socialName: "Campanha LTDA",
                //     uf: "RJ",
                //     county: "Rio de Janeiro",
                //     address: "Rua Almirante Barroso 304 bloco A andar 508",
                //     cnpj: "64.346.677/0001-69",
                //     complement: "testnado "
                // }
              ]
        }
        this.navigateToPage = this.navigateToPage.bind(this);
        this.toPage = this.toPage.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
    }

    componentWillMount(){
        this.props.getPokemon();
    }

    componentDidMount(){
        this.setState({ table: this.getData(this.props.config.values) });
    }

    navigateToPage(page){
        this.props.navigation.navigate(page);
    }

    toPage(page){
        this.setState({ page: page})
    }

    changeFilter(value){
        this.setState({ filter: value })
    }

    changeSearch(text, bool, instruction){
        this.setState({ search: text, visibleTable: bool });

        if(instruction){
            this.setState({ instruction: instruction })
        } else{
            this.setState({ instruction: null })
        }
    }

    getData(values){
        return chunk(values, limit);
    }

    getTable(){

        let table = [];
        const values = this.props.config.values;
        let filteredValues = null;

        if(this.state.search != ''){
            if(!this.state.blockSearch){
                const search = this.state.search,
                property = this.state.filter;
                filteredValues = values.filter((item) => ((String(item[property]).toUpperCase()).indexOf(String(search).toUpperCase()) != -1) );
                table = this.getData(filteredValues);
                this.setState({ table: table, blockSearch: true, pages: table.length })
                setTimeout(() =>  this.setState({ blockSearch: false }), 500)
            }
        }  else{
            if(!this.state.blockSearch){
                filteredValues = values;
                table = this.getData(filteredValues);
                this.setState({ table: table, blockSearch: true, pages: table.length })
                setTimeout(() =>  this.setState({ blockSearch: false }), 500)
            }
        }

        const response = this.state.table[this.state.page];
        
        if(response && response.length == 0){
            if(!this.state.blockSearch){
                setTimeout(() =>  this.setState({ page: 0}), 500)
            }
        } else if(!response){
            if(!this.state.blockSearch){
                setTimeout(() =>  this.setState({ page: 0}), 500)
            }
        }
        

        return response;
    }

    render(){
        return(
            <View>
                <View style={[styles.contentTable]}>
                    {/* <View style={styles.sidebar}></View> */}
                    <View style={[styles.content ]}>
                        <Table
                            detailItem="clients"
                            colorHeader='#212121'   
                            background1="#D1D1D1"
                            background2="#D1D1D1"
                            fontHeader={16}
                            fontValues={14}
                            heightRow={45}
                            borderRightWidth={2}
                            borderBottomWidth={5}
                            backgroundHeader="#EBEBEB"                            
                            schema={this.props.config.schema.map((item) => { item.width = 240; return item; } )}
                            limit={limit}
                            values={this.getTable()}
                            page={this.state.page}
                            pages={this.state.pages}
                            toPage={this.toPage}
                        />
                    </View>
                    {/* <View style={styles.sidebar}></View> */}
                </View>
            </View>
        )
    }
}


const mapStateToProps = state =>(
	{
		config: state.config
	}
);


const mapDispatchToProps = dispatch => 
	bindActionCreators(ConfigActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Clients);