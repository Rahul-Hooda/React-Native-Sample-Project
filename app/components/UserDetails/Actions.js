import React from 'react';
import {View} from 'react-native';
import styles, {ICON_SIZE} from './styles';
import {toPhoneNumber} from '../../helpers/string';
import Row from './Row';

const Actions = ({email, cell, phone}) =>{
  return(
    <View style = {styles.actionContainer}>

    <Row
    label = 'Email'
    body = {email}
    actions = {[
    {
    onPress : () => null,
    androidIcon : 'md-mail',
    iosIcon : 'ios-mail'
    }
    ]}/>

    <Row
    label = 'Cell'
    body = {toPhoneNumber(cell)}
    actions = {[
    {
    onPress : () => null,
    androidIcon : 'md-call',
    iosIcon : 'ios-call'
  },
  {
  onPress : () => null,
  androidIcon : 'md-mail',
  iosIcon : 'ios-mail'
}
    ]}/>

    <Row
    label = 'Home'
    body = {toPhoneNumber(phone)}
    actions = {[
    {
    onPress : () => null,
    androidIcon : 'md-call',
    iosIcon : 'ios-call'
    }
    ]}/>

    </View>
  );
}
export default Actions;
