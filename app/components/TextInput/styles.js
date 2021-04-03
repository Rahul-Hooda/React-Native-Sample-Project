import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    marginLeft: 20,
    marginTop: 15,
    borderBottomColor: colors.border,
    borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlinewidth : 0
  },
  input:{
    height: 40,
    width: window.width,
  }
});
export default styles;
