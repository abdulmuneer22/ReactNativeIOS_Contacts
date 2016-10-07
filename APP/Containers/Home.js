
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import styles from './HomeStyle'
import StatusBar from '../Components/StatusBar'
import firebase from 'firebase'


var Contacts = require('react-native-contacts')


class Home extends Component {
  constructor(){
    super();
    this.state = {
      dataSource : new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      
    }

  }


  _getContacts(){

    Contacts.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        // x.x
      } else {
        //console.log(contacts)
        var Data = []
        contacts.forEach((item)=>{
          
          //console.log(item.phoneNumbers[0].number)
          
          Data.push({
            FirstName : item.givenName,
            SirName : item.familyName,
            PrimaryNumber : item.phoneNumbers[0].number

          })
          

        })

        this.setState({
        dataSource: this.state.dataSource.cloneWithRows(Data)

      });
        


      }
    })

  }



  render(){
    return(
        <View>
        <StatusBar title="Account Settings" {...this.props}/>
        
        <View style={{
          borderColor :'grey',
          borderWidth :1,
          height :400,
          margin :10,
          borderRadius : 5


        }}
        
        
        >
        <TouchableHighlight
        onPress={this._getContacts.bind(this)}
        >
        <Text>Click</Text>
        </TouchableHighlight>
        
        
        
        <ListView
            dataSource = {this.state.dataSource}
            renderRow = {
            (rowData)=>{
              <View>test</View>
            }
            }
          />
        
        </View>


        </View>
    )
  }


}









export default Home