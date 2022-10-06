import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/component/Splash'
import { Second } from './src/component/Second';
import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';

const Stack = createNativeStackNavigator();

export default function App() {
  // const routes = (
  //   /* Address Bar can be toggled on or off by setting the addressBar prop */
  //   <Router history={nativeHistory} addressBar>
  //     <StackRoute path="Home" component={Splash}>
  //       <Route path="/detail/:themeColor" component={Second}  />
  //     </StackRoute>
  //   </Router>
  // );

  
  return (
  //   <NavigationContainer>
  //       <Splash /> 
  // </NavigationContainer>
    <View>
      <Splash />
    </View>

  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
