import React from 'react';
import {View , Text , StyleSheet , TouchableOpacity , Image} from 'react-native';

const listItem = (props) =>{

    return (

        <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text >
                {props.placeName}
            </Text>
            <Image style={{width:230 , height:100}} source={props.placeImage}></Image>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        width: "100%",
        padding: 10,
        margin:5,
       backgroundColor: "#eee",
    }
})

export default listItem;