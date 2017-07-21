import React, { Component } from 'react';
import{
    Text,
    StyleSheet,
} from 'react-native';


export default class ZeYouText extends Component{
    render() {
        return (
            <Text
                {...this.props}
                style = {[this.props.style,styles.Text]}
            >
                {this.props.children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    Text:{
        fontFamily:'PingFangSC-Medium'
    },
})
