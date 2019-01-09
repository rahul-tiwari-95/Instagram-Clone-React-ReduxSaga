import React , { Component} from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'


class SideDrawer extends Component{

    render(){

        return (
            <TouchableOpacity >
                <View style={styles.itemDrawer}>
                    <Icons name="ios-construct" size={50} color="red" style={{margin:10}}/>
                    <Text style={{fontWeight:'bold' , fontSize:22 }}>Side Drawer</Text>

                </View>

            </TouchableOpacity>
        )
    }
}

const styles= StyleSheet.create({

    itemDrawer:{
        //padding: 100,
        paddingTop: 50,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:"white"
    }
})

export default SideDrawer;