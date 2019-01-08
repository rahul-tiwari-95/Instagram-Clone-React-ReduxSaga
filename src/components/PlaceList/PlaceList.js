import React from 'react';
import {View , Text , StyleSheet , TextInput , Button , FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem'

const PlaceList = (props) =>{
    
        //   <ListItem key={id} placeName={el} onItemPressed={()=>props.onDeleteItem(id)} /> )
      

    return (
        <FlatList style={styles.ListItemContainer}
        data={props.places}
        renderItem={(data)=>(
            <ListItem 
             placeName={data.item.name}
             placeImage={data.item.image}
             onItemPressed={()=>props.onItemSelected(data.item.key)} /> 
 
        )}
         >
          </FlatList>

    )

}

const styles = StyleSheet.create({
    ListItemContainer:{
        width: "100%",
        flex:1,
      }
})

export default PlaceList;