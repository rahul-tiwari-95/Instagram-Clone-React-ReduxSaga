import React , {Component}from 'react';
import { Modal,View , Text , Image , Button , StyleSheet , TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux';
import {deletePlace} from '../../store/actions/index';



class PlaceDetail extends Component{

    deleteItemHandler = ()=>{

        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop(); //Simply goes back
    }

    render(){
        return(
            <View style={styles.Container}>

            
             <View>
                 <Image source={this.props.selectedPlace.image} style={{width:"100%" , height:200}} />
                 <Text style={styles.placeNameStyles}>{this.props.selectedPlace.name}</Text>
             </View> 
                     
                     <Button title="Delete" color="red" onPress={this.deleteItemHandler}/>
                     <Button title="Close" onPress={this.props.onModalClose} />
 
 
 
             </View>

        )
    }
}


const styles = StyleSheet.create({
    Container:{
        margin: 50,
        flex: 1
    },
    placeNameStyles:{
        fontWeight:"bold" , textAlign:"center" , fontSize:28 
    },
    deleteIconStyle:{

        justifyContent: 'center',
        alignItems: 'center',
    },
})

const mapDispatchToProps = dispatch =>{
    return{

        onDeletePlace: (key)=>dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);