import React , {Component} from 'react';
import {View , Text , StyleSheet , TextInput , Button} from 'react-native';
import Input from '../UI/Input/Input'

type Props ={};
class PlaceInput extends Component<Props>{

    state={
        placeName:''
    }
    placeNameChanged = (event) =>{
        //alert(event)
        this.setState({
            placeName: event,
        })
      }

    
render(){
    return (



             <Input placeholder="Place Name" 
             value={this.state.placeName} onChangeText={this.placeNameChanged} />

    )


}
}

const styles = StyleSheet.create({

   
})


export default PlaceInput;