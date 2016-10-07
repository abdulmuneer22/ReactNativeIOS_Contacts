
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 

class StatusBar extends Component {

    render(){

        return(
            <View style={{
                flexDirection : 'row',
                flex : 1,'backgroundColor' : 'yellow',
                height : 40,
                paddingTop : 10
            }}>

            <View style={{backgroundColor : 'green',flex : 1}}>
            </View>

            <View style={{flex : 4,alignItems : 'center',justifyContent : 'center'}}>
            <Text>Test</Text>
            </View>
            
            <View style={{flex : 1,alignItems : 'flex-end',paddingRight : 5}}>
            <Icon name="ios-menu" size={25} color="black" />
            </View>
            
            
            </View>
            
           

        )
    }

}



export default StatusBar
