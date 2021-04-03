import React,{ Component } from 'react';
import {View, ScrollView} from 'react-native';
import {CustomTextInput} from '../components/TextInput';
import colors from '../config/colors';
import {PrimaryButton} from '../components/Buttons';

const fields = [
  {placeholder: 'First Name', stateKey: 'firstName'},
  {placeholder: 'Last Name', stateKey: 'lastName'},
  {placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address'},
  {placeholder: 'Mobile Phone', stateKey: 'mobilePhone'},
  {placeholder: 'City', stateKey: 'city'},
  {placeholder: 'Birthday', stateKey: 'birthday'},
  {placeholder: 'Registered', stateKey: 'registered'},
  {placeholder: 'Username', stateKey: 'username'}
];

type Props = {};
export default class NewContact extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {};
  }

  onInputChange = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  }

  handleSubmit = () => {
    alert('Data Saved');
  }

  render() {
    return (
      <ScrollView style = {{backgroundColor: colors.background}}>
      {fields.map( (field) => (
        <CustomTextInput
        key = {field.stateKey}
        onChangeText = {(text) => this.onInputChange(text, field.stateKey)}
        {...field}/>
      ))}
      <View style = {{ marginTop: 20}}>
      <PrimaryButton
      label = 'Save'
      onPress = {() => this.handleSubmit()}/>
      </View>
      </ScrollView>
    );
  }
}
