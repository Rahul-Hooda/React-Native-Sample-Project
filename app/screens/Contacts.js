import React,{ Component } from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import {contacts} from '../config/data';
import colors from '../config/colors';
import {ListItem} from '../components/ListItem';

type Props = {};
export default class Contacts extends Component<Props> {

  handleRowPress = (contact) => {
    this.props.navigation.navigate('Details', contact);
  };

  render() {
    return (
      <View>
        <FlatList
        style = {{backgroundColor : colors.background}}
        data = {contacts}
        renderItem = {({item}) =>
        <ListItem contact = {item} onPress = {() => this.handleRowPress(item)}/>
        }
        keyExtractor = {(item) => item.email}/>
      </View>
    );
  }
}
