import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import style from './styles';

export default class SampleButton extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { onPress, background, color, textButton, border, marginTop, width, marginLeft } = this.props;
        return (
            <TouchableOpacity
                style={[
                    style.button,
                    { backgroundColor: background },
                    border && border,
                    (marginTop ? { marginTop: marginTop } : { marginTop: 30 }),
                    (width != null && { width: width }),
                    (marginLeft != null && { marginLeft: marginLeft })
                ]}
                onPress={onPress}>
                <Text style={[style.text, { color: color }]}>{textButton}</Text>
            </TouchableOpacity>
        )
    }
}