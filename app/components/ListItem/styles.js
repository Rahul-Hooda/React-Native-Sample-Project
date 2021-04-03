import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export const CHEVRON_SIZE = 25;
export default StyleSheet.create({
avatar: {
	height:40,
	width:40,
	borderRadius:20,
	marginRight:10
},
row: {
	flexDirection: 'row',
	alignItems: 'center',
	paddingHorizontal: 15,
	paddingVertical: 8
},
name:{
fontSize: 16,
color: colors.primaryText
},
email:{
fontSize: 13,
color: colors.subtleText
},
chevronContainer:{
flex: 1
},
chevron:{
alignSelf: 'flex-end',
color: colors.subtleText
}
});