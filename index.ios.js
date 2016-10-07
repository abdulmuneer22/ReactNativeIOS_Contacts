
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListViewSample from './Test/ListViewSample'


class DropDown extends Component {
  constructor(){
    super();
  }

  render(){
    return(<View>
    <ListViewSample/>
    </View>
  )
  }


}









AppRegistry.registerComponent('DropDown', () => DropDown);
