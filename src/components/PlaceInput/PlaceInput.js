import React , {Component} from 'react';
import {View , Text , StyleSheet , TextInput , Button} from 'react-native';
import Input from '../UI/Input/Input'

type Props ={};
const PlaceInput =(props)=>{


    return (



             <Input placeholder="Place Name" 
             value={props.placeName} onChangeText={props.onChangeText} />

    )

    }

const styles = StyleSheet.create({

   
})


export default PlaceInput;