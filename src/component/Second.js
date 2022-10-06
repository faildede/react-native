import React, {useState} from 'react'
import { View, Text, Button, TextInput, } from 'react-native'


export const Second = () => {
    const [value, setValue] = useState()
    


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