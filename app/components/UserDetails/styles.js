import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window');
export const ICON_SIZE = 25
export default StyleSheet.create({
  image: {
  	height: window.width / 2,
  	width: window.width / 2,
  	borderRadius: window.width / 4
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20
  },
  name: {
    fontSize: 22,
    color: colors.primaryText,
    marginTop: 10
  },
  actionContainer: {
    borderTopWidth: StyleSheet.hairlinewidth,
    borderBottomWidth: StyleSheet.hairlinewidth,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    paddingVertical: 15,
    backgroundColor: colors.greyBackground
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  actionInfo: {
    flexDirection: 'column'
  },
  actionLabel: {
    fontSize: 12,
    color: colors.subtleText,
    marginBottom: 3
  },
  actionBody: {
    fontSize: 16,
    color: colors.primaryText,
    marginBottom: 5
  },
  actionIcons: {
    flexDirection: 'row'
  },
  actionIcon: {
    marginLeft: 13
  },
  infoContainer: {
    paddingVertical: 15,
    backgroundColor: colors.background
  },
});
