import React from 'react';
import {TextInput , StyleSheet} from 'react-native';

const Input =(props) =>{

    return(
    <TextInput 
    style={styles.input}
     style={[styles.input, props.style]}
    {...props}
    />
    )

}

const styles = StyleSheet.create({
   
    input:{
        width:"80%",
        borderWidth: 2,
        borderColor: "grey",
        padding: 10,
        margin: 10,
        backgroundColor: 'transparent',
    }
})
export default Input;