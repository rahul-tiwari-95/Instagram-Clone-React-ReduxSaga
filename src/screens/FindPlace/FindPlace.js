import React , {Component} from 'react';
import {View , Text , StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component{


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

    itemSelectedHandler = (key) =>{
        const selPlace = this.props.places.find(place =>{
            return place.key === key;
        });
        this.props.navigator.push({
            screen: "GullyBoy-PlaceDetail",
            title: selPlace.name,
            passProps:{
                selectedPlace: selPlace
            },

        })
    };

    render(){


        return (
            <View style={styles.ItemContainer}>
            <PlaceList places={this.props.places}  onItemSelected={this.itemSelectedHandler}  />
            </View>
        )
    }
}

const mapStateToProps=(state)=>{

    return{
        places: state.places.places
    };
};

const styles = StyleSheet.create({
    ItemContainer:{
        width: "50%",
        padding: 10,
        flex:2,
        alignContent: 'center',
        alignItems: 'center',
        
      }
})



export default connect(mapStateToProps)(FindPlace);