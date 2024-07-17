import {Text,View,TouchableOpacity} from 'react-native';

const Stack4 = (props)=>{
  return(
    <>
    <View style = {{alignItems:'center',justifyContent:'center',backgroundColor:'#fff',padding:20,borderRadius:10,margin:10}}>
    <Text style = {{fontFamily:'cursive',fontSize:40,color:'grey'}} >Stack4</Text>
    </View>
    <TouchableOpacity 
    onPress = {()=>{props.navigation.navigate('Stack1')}}
    style ={{

    }}>
    <Text>Go to Home</Text>
    </TouchableOpacity>
    </>
  )
}

export default Stack4;