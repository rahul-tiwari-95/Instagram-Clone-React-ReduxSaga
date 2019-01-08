import React , {Component} from 'react';
import {View , Text , TextInput , Button , StyleSheet , ScrollView , Image} from 'react-native'
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {connect} from 'react-redux';
import {addPlace} from '../../store/actions/index';
import IndiaImage from '../../assets/India-Gate.jpg';




class SharePlace extends Component{

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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

    placeAddedFunction = (placeName)=>{
        this.props.placeAdded(placeName);
    }

    render(){

        return (

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{fontWeight:"bold" , fontSize:20}}>Share Place</Text>
                <View style={styles.placeholder}>
                    {/* <Text>Image Preview</Text> */}
                    <Image source={IndiaImage} style={{height:'100%' , width:'100%'}}/>
                </View>
                <View style={styles.buttonStyle}>
                <Button title="Pick Image"/>
                </View>
                <View style={styles.placeholder}>
                    <Text> Map View </Text>
                </View>
                <View style={styles.buttonStyle}>
                <Button title="Locate me!" />
                </View>
                <PlaceInput />
                {/* <Input placeholder="Place Name"/> */}
                <View style={styles.buttonStyle}>
                <Button title="Submit"/>
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
        flex:1,
        alignItems: 'center',
    },
    buttonStyle:{
        margin:8
    }
})

const mapDispatchToProps=(dispatch) =>{
    return{
        placeAdded: (placeName)=>{dispatch(addPlace(placeName))}
    }
}

export default connect(null , mapDispatchToProps)(SharePlace);