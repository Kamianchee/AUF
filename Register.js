import {StatusBar} from 'expo-status-bar';
import {StylSheet, Text ,View} from 'react-native';
export defaut function Register (){
	return (
	<View style={styles.container}>
	<Text>Register </Text>
	<StatusBar style="auto"/>
	</View>
	);


}
const styles =StylSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		alignItems:'center',
		justifyContent:'center',

	},
}
);
