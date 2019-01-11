import React , {Component} from 'react';
import {View , Text , TextInput , Button , StyleSheet , ScrollView , Image , KeyboardAvoidingView} from 'react-native'
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {connect} from 'react-redux';
import {addPlace} from '../../store/actions/index';
import PickImage from '../../components/PickImage/PickImage'
import PickLocation from '../../components/PickLocation/PickLocation'




class SharePlace extends Component{


    state={
        placeName:'',
        location:{
            value:null,
            valid:false 
        }
    }

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    placeNameChangedHandler =(val)=>{
        this.setState({
           
            placeName:val
        })
    }

    onNavigatorEvent=(event)=>{
        console.log(event);

        if(event.type=== "NavBarButtonPress"){
            if(event.id ==="Side-Drawer-ID"){
                    this.props.navigator.toggleDrawer({
                        side: 'left'
                    })
            }
        }
    }

    placeAddedFunction = ()=>{
        this.props.placeAdded(this.state.placeName , this.state.location);
    }

    locationPickedHandler =(location)=>{
        this.setState((prevState)=>{
            return {
                ...prevState.placeName,
                location:{
                    value:location,
                    valid: true
                }
            }
        })
    }

    render(){

        return (

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{fontWeight:"bold" , fontSize:20}}>Share Place</Text>
                <PickImage />
                <PickLocation onLocationPick={this.locationPickedHandler} />
                <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangedHandler}/>
                <View style={styles.buttonStyle}>
                <Button title="Submit" onPress={this.placeAddedFunction} />
                </View>
                    {/* <PlaceInput onPlaceAdded={this.placeAddedFunction}/>  */}
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    placeholder:{

        borderWidth: 3,
        backgroundColor: "#eee",
        width: '80%',
        height: 200
    
    },
    container:{
        flex:2,
        alignItems: 'center',
    },
    buttonStyle:{
        margin:8
    }
})

const mapDispatchToProps=(dispatch) =>{
    return{
        placeAdded: (placeName , location)=>{dispatch(addPlace(placeName , location))}
    }
}

export default connect(null , mapDispatchToProps)(SharePlace);