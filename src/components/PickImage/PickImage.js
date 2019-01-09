import React , {Component} from 'react';
import {View, Image , Button , StyleSheet} from 'react-native';
import IndiaImage from '../../assets/India-Gate.jpg'


class PickImage extends Component{
    render(){

        return(
            <View style={styles.container}>
                    <View style={styles.placeholder}>
                    {/* <Text>Image Preview</Text> */}
                    <Image source={IndiaImage} style={{height:'100%' , width:'100%'}}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="Pick Image" onPress={()=>alert("Pick Image")}/>
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


export default PickImage;

