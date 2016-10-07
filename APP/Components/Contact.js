import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, TouchableHighlight,Image } from 'react-native';


class ContactItem extends Component{
constructor(){
    super();
    this.state = {
        
    }

    
}

componentWillMount(){
    console.log(this.props)
}

render(){

    return(

        <View>
        <Text>
        {this.props.Name}
        </Text>

        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.props.thumbnailPath}}
        />
        </View>
    );

}

}


export default ContactItem