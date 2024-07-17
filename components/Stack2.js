import {Text,View,TouchableOpacity} from 'react-native';

const Stack2 = (props)=>{
  return(
    <>
    <View style = {{alignItems:'center',justifyContent:'center',backgroundColor:'#fff',padding:20,borderRadius:10,margin:10}}>
    <Text style = {{fontFamily:'cursive',fontSize:40,color:'grey'}} >Stack2</Text>
    </View>
    <TouchableOpacity 
    onPress = {()=>{props.navigation.navigate('Stack3')}}
    style ={{

    }}>
    <Text>Go to Stack_3</Text>
    </TouchableOpacity>
    </>
  )
}

export default Stack2;