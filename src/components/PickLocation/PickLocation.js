import React , {Component} from 'react';
import {View , Text , StyleSheet , Button , Dimensions} from 'react-native';
import MapView from 'react-native-maps';


class PickLocation extends Component{

    state={
        focusedLocation:{
            latitude: 40.758896,
            longitude:-73.985130,
            latitudeDelta:0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122,
        },
        locationChose: false
    }

    LocationHandler =(event)=>{
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
        this.setState((prevState)=>{
            return{
                focusedLocation:{
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude,

                },
                locationChose: true
            }
        })
        this.props.onLocationPick({
            latitude:coords.latitude,
            longitude:coords.longitude
        })
    }

    getUserLocation = ()=>{
        navigator.geolocation.getCurrentPosition(position =>{

            const coordsEvent = {
                nativeEvent:{
                    coordinate:{
                        latitude: position.coords.latitude,
                        longitude:position.coords.longitude
                    }
                }
            }; this.LocationHandler(coordsEvent)

        } , error=>{
            console.log(error);
            alert("Fetchinh Data Failed")
        })
    }

    render(){

        
        let marker = null;
        if(this.state.locationChose){
            marker = <MapView.Marker coordinate={this.state.focusedLocation} />
        }

        return(
            <View style={styles.container}>
                <MapView initialRegion={this.state.focusedLocation}
                 //region={this.state.focusedLocation} 
                 style={styles.Map} 
                 onPress={this.LocationHandler}
                ref = {ref => this.map =ref}
                 >
                 {marker}
                 </MapView>

                <View style={styles.buttonStyle}>
                    <Button title="Locate me!" onPress={this.getUserLocation}/>
                </View> 
            </View>    
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
        width:'100%',
        alignItems: 'center',
    },
    buttonStyle:{
        margin:8
    },
    Map:{
        width:'100%',
        height: 250
    }
})

export default PickLocation;