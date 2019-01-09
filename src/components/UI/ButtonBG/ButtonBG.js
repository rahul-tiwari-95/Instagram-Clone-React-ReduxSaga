import React from 'react';
import {Button , StyleSheet , Text , TouchableOpacity , View , TouchableNativeFeedback , Platform   } from 'react-native'


const ButtonBG =(props)=>{

    let commonContent = (
        <View style={[styles.button, {backgroundColor:props.color}]}>
                <Text>
                        {props.children}
                </Text>
            </View>
    )

    if(Platform.OS==='android'){
            return(
                <TouchableNativeFeedback>   
                    {commonContent}
                </TouchableNativeFeedback>
            )
    }
    return(

        <TouchableOpacity onPress={props.onPress}>
         {commonContent}   
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button:{
            padding:10,
            margin: 5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'black',
    }
})

export default ButtonBG;