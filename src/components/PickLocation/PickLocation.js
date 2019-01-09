import React , {Component} from 'react';
import {View , Text , StyleSheet , Button} from 'react-native';


class PickLocation extends Component{

    render(){


        return(
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Text> Map View </Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="Locate me!" onPress={()=>alert("Pick Location")}/>
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
    }
})

export default PickLocation;