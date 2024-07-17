import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 import Home from '../components/Home';
 import Feed from '../components/Feed';
 import Notification from '../components/Notification';
 import Profile from '../components/Profile';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import StackNavigation from './StackNavigation'
 const BottomTabNavigation = ()=>{
   const BottomTab = createBottomTabNavigator();
   return(
     <>
     <NavigationContainer>
     <BottomTab.Navigator screenOptions={{headerShown:false}}>
     <BottomTab.Screen 
     name = 'Home' 
     component = {StackNavigation} 
     options = {{
       tabBarIcon:({color,size})=>(<MaterialCommunityIcons name='home' size = {25} />),
       tabBarLabel : 'Home'
       }}  
      />
     <BottomTab.Screen 
     name = 'Feed' 
     component = {Feed}
     options = {{
       tabBarIcon :({color,size})=>(<MaterialCommunityIcons name = 'reorder-horizontal' size={25}/>),
       tabBarLabel:'Feed'
     }}
     />
     <BottomTab.Screen 
     name = 'Notification'
      component = {Notification}
      options = {{
        tabBarIcon:({color,size})=>(<MaterialCommunityIcons name = 'bell' size = {25}/>),
        tabBarLabel:'Notification'
      }}
      />
     <BottomTab.Screen 
     name = 'Profile'
      component = {Profile}
      options = {{
        tabBarIcon:({color,size})=>(<MaterialCommunityIcons name = 'account' size = {25}/>),
        tabBarLabel :'Profile'
      }}
      />
      </BottomTab.Navigator>
     </NavigationContainer>
     </>
   )
 }

 export default BottomTabNavigation;