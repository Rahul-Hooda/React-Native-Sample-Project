import React,{ Component } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Actions, Info} from '../components/UserDetails';
import colors from '../config/colors';
import { me } from '../config/data';
import {PrimaryButton} from '../components/Buttons';

type Props = {};
export default class Me extends Component<Props> {
  render() {
    return (
      <ScrollView>
      <View style = { {backgroundColor: colors.background} }>
        <Header {...me}/>
        <PrimaryButton
        label='Edit Profile'
        onPress= {() => null}/>
        <Actions {...me}/>
        <Info {...me}/>
      </View>
      </ScrollView>
    );
  }
}
