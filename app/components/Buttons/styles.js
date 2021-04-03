import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  primaryButtonContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginBottom: 18
  },
  primaryButton:{
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlinewidth,
    backgroundColor: colors.link
  },
  primaryButtonText:{
    paddingVertical: 15,
    paddingHorizontal: 40,
    color: colors.white,
    fontSize: 14
  }
});
export default styles;
