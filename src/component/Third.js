import React from 'react'
import {View, Text} from 'react-native'

export const Third = () =>{

    return(
        <View>
            <View>
             <Text>Your mnemonic phrase</Text>
             <Text>Enter your unique mnemonic phrase to enter the wallet.</Text>
            </View>
            <View>
                <TextInput 
                value={value}
                numberOfLines={4}
                onChangeText={text => setValue(text)} />
            </View>
            <View>
                <Button />
            </View>
        </View>
    )
}