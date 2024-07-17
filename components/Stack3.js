import {Text,View,TouchableOpacity} from 'react-native';

const Stack3 = (props)=>{
  return(
    <>
    <View style = {{alignItems:'center',justifyContent:'center',backgroundColor:'#fff',padding:20,borderRadius:10,margin:10}}>
    <Text style = {{fontFamily:'cursive',fontSize:40,color:'grey'}} >Stack3</Text>
    </View>
    <TouchableOpacity 
    onPress = {()=>{props.navigation.navigate('Stack4')}}
    style ={{

    }}>
    <Text>Go to Stack_4</Text>
    </TouchableOpacity>
    </>
  )
}

export default Stack3;