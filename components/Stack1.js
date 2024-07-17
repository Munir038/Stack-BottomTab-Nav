import {Text,View,TouchableOpacity} from 'react-native';

const Stack1 = (props)=>{
  return(
    <>
    <View style = {{alignItems:'center',justifyContent:'center',backgroundColor:'#fff',padding:20,borderRadius:10,margin:10}}>
    <Text style = {{fontFamily:'cursive',fontSize:40,color:'grey'}} >Home</Text>
    </View>
    <TouchableOpacity 
    onPress = {()=>{props.navigation.navigate('Stack2')}}
    style ={{

    }}>
    <Text>Go to Stack_2</Text>
    </TouchableOpacity>
    </>
  )
}

export default Stack1;