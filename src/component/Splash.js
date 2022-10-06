import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Header,
    Link,
    nativeHistory,
    Route,
    Router,
    StackRoute,
    withRouter,
  } from 'react-router-native';


export default function Splash({ navigation }){


    return(
        <View>
            <View>
               <Image source={{ uri:'./image/Currency-rafiki 1.png' }} />
            </View>
            <View>
                <Text style={{ color:'#494949', fontSize:30, fontWeight:700 }}>
                Welcome <Text style={{  color:'#764BA2' }}>to Cosmos</Text> Wallet
                </Text>
                <Text style={{ fontSize:18, fontWeight:400,  }}>Buy crypto, sell crypto. Safe, fast and simple</Text>
            </View>
            <View>
                <Button
                style={{ padding:10, color:'#5063BF' }} 
                onPress={() => navigation.navigate('second')}
                title={Continue} />
            </View>
        </View>
    )
}