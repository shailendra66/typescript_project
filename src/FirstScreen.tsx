import { View, Text } from 'react-native'
import React, { FunctionComponent, ReactElement } from 'react'
 
interface MyProps{
    name:string,
    email:string,
    age:number
}

const FirstScreen:FunctionComponent<MyProps>=({name,email,age}:MyProps):ReactElement=>{
    return(
        <View>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{age}</Text>
        </View>
    )
}

export default FirstScreen;