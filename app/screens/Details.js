import React,{ Component } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Actions, Info} from '../components/UserDetails';
import colors from '../config/colors';

type Props = {};
export default class Details extends Component<Props> {
  render() {
    const contact = this.props.route.params
    return (
      <ScrollView>
      <View style = { {backgroundColor: colors.background} }>
        <Header {...contact}/>
        <Actions {...contact}/>
        <Info {...contact}/>
      </View>
      </ScrollView>
    );
  }
}
