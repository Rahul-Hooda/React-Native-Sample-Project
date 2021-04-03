import React from 'react';
import {View} from 'react-native';
import styles, {ICON_SIZE} from './styles';
import {capitalizeFirstLetter} from '../../helpers/string';
import Row from './Row';
import moment from 'moment';

const Info = ({location, dob, registered, login}) => {
  return(
    <View style = {styles.infoContainer}>

    <Row
    label = 'City'
    body = {capitalizeFirstLetter(location.city)}/>

    <Row
    label = 'Birthday'
    body = {moment(dob).format('MMMM Do, YYYY')}/>

    <Row
    label = 'Registered'
    body = {moment(registered).format('MMMM Do, YYYY')}/>

    <Row
    label = 'Username'
    body = {login.username}/>

    </View>
  )
};
export default Info;
