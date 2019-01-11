import React , {Component} from 'react';
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component{

    state={
        placeLoaded: false
    }

    placeLoadedHandler =()=>{
        this.setState({

            placeLoaded:true
        })
    }

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

        let content = (
            <TouchableOpacity onPress={this.placeLoadedHandler}>
                    <View style={styles.searchButton}>
                    <Text style={{fontWeight:"bold" , fontSize:10 }}>
                        Find Place
                    </Text>
                    </View>
            </TouchableOpacity>
        )

        if(this.state.placeLoaded===true){
           
           content=( <PlaceList places={this.props.places}  onItemSelected={this.itemSelectedHandler}  />)

        }

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
        
      },
      searchButton:{
          borderWidth: 3,
          borderRadius: 10,
          padding:50,

      },
      buttonContainer:{
          flex:1,
          justifyContent: 'center',
          alignItems:'center'
      }
})



export default connect(mapStateToProps)(FindPlace);