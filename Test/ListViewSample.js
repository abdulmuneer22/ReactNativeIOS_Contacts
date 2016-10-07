import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, TouchableHighlight,Image,TouchableOpacity } from 'react-native';
import ContactItem from '../APP/Components/Contact'
var ListItems = [
          {
          question : "Who is The Prime Minister Of India",
          answer : 'Narendra Modi'
         },
         {
          question : "Who is The Prime Minister Of India",
          answer : 'Narendra Modi'
         },
         {
          question : "Who is The Prime Minister Of India",
          answer : 'Narendra Modi'
         },
         {
          question : "Who is The Prime Minister Of India",
          answer : 'Narendra Modi'
         },
]

import Icon from 'react-native-vector-icons/Ionicons';

var Contacts = require('react-native-contacts')
         

class ListViewSample extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),
      _showAnswer : ''
    };
  }

  getContacts(){
  


  Contacts.getAll((err, contacts) => {
  if(err && err.type === 'permissionDenied'){
  // x.x
  } else {

  //console.log(contacts)
  var CList = []
  contacts.forEach((item)=>{
  
  //console.log(item.emailAddresses[0].email)
  


  CList.push({
    Name : item.familyName,
    thumb : item.thumbnailPath,
    email : 'sample@abc.com'
  });

});
  //console.log(CList)  
  
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
  this.setState({dataSource : ds.cloneWithRows(CList)})





  }
  })
  }

  



  componentDidMount(){
      //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      //console.log("test")
      //this.setState({dataSource : ds.cloneWithRows(ListItems)})

      this.getContacts()


  }


  _showAnswer(answer){
      //this.setState({_showAnser : answer})
  }


  render() {
    return (
      <View style={{marginTop: 50}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(contact) => 
              
              
              <View style={{
                
                padding : 10,
                flexDirection : 'row',
                backgroundColor :'#3f474b'
              
            }}>
              
              <View style={{flex : 1,padding : 10}}>
              <TouchableOpacity>
              <Icon name="ios-contact" size={40} color="grey" />
              </TouchableOpacity>
              </View>

              <View style={{
                margin : 10,
                flex : 6,
                paddingLeft :10,
                //alignItems : 'center',
                justifyContent : 'center'
            }}>
              <Text style={{textAlign : 'left',fontSize :18,color : "white"}}>
              {contact.Name}
              </Text>
              <Text style={{
                textAlign : 'left',
                fontSize :14,
                color : "white",
                paddingTop : 5
              }}>{contact.email}</Text>
              
              </View>

              <View style={{padding : 10,flex: 1}}>
              <TouchableOpacity>
              <Icon name="ios-call" size={30} color="white" />
              </TouchableOpacity>
              </View>


              
              
              
              </View>
        }
        />
      </View>
    );
  }
}

export default ListViewSample