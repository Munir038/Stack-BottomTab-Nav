import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Stack1 from '../components/Stack1';
import Stack2 from '../components/Stack2';
import Stack3 from '../components/Stack3';
import Stack4 from '../components/Stack4';
const StackNavigation = ()=>{
  const Stack = createStackNavigator();
  return(
      
      <Stack.Navigator screenOptions = {{headerShown:false}}>
      <Stack.Screen name = 'Stack1' component = {Stack1}/>
      <Stack.Screen name = 'Stack2' component = {Stack2}/>
      <Stack.Screen name = 'Stack3' component = {Stack3}/>
      <Stack.Screen name = 'Stack4' component = {Stack4}/>
      </Stack.Navigator>
     
  )
}

export default StackNavigation;