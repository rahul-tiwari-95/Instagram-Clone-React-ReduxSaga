import FindPlace from './src/screens/FindPlace/FindPlace'
import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlace from './src/screens/SharePlace/SharePlace'
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'


const store = configureStore();



//Register Screens

Navigation.registerComponent("GullyBoy-AuthScreen" , ()=> AuthScreen , store , Provider);
Navigation.registerComponent("GullyBoy-SharePlace" , ()=> SharePlace, store , Provider);
Navigation.registerComponent("GullyBoy-FindPlace" , ()=> FindPlace, store , Provider);
Navigation.registerComponent("GullyBoy-PlaceDetail" , ()=> PlaceDetail , store , Provider);
Navigation.registerComponent("GullyBoy-SideDrawer" , ()=> SideDrawer, store, Provider);



//Start a App

Navigation.startSingleScreenApp({

  screen: {
    screen: "GullyBoy-AuthScreen",
    title: "Namaste Rahul"
  }
})



















































// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View , TextInput , Button , Image} from 'react-native';
// import ListItem from './src/components/ListItem/ListItem';
// import PlaceInput from './src/components/PlaceInput/PlaceInput'
// import PlaceList from './src/components/PlaceList/PlaceList'
// import PlaceDetail from './src/PlaceDetail/PlaceDetail';
// import PlaceImage from './src/assets/new-york-skyline.jpg';
// import {connect} from 'react-redux'
// import {addPlace , deletePlace , selectPlace , deselectPlace} from './src/store/actions/index'


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// class App extends Component<Props> {

//   // state = {


//   //   places: [],
//   //   selectedPlace : null,
//   // }
  

//   // placeNameChanged = (event) =>{
//   //   //alert(event)
//   //   this.setState(prevState=>{
//   //     return{
//   //       placeName: event
//   //     }
//   //   })
//   // }

//   placeSubmitHandler = (placeName) =>{
//     //Code for onPress goes here.
//     console.log("Place Added");
//     this.props.onAddPlace(placeName);

//         // this.setState(prevState =>{
//         //   return{
//         //     places: prevState.places.concat(
//         //       {  key:Math.random(),
//         //          name: placeName,
//         //          image: {
//         //            uri: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_60/fetchdata13/images/99/15/2f/99152f8531885c0a7a1066cd4752436d.jpg"
//         //          }
//         //         })
//         //   }
//         // })
        


//   }
//   placeSelectedHandler = (id) =>{

//     this.props.onSelectPlace(id);

//     // this.setState(prevState=>{
//     //   return{
//     //     selectedPlace:prevState.places.find(place=>{
//     //       return place.key===id;
//     //     })
//     //   }
//     // })
//     // // this.setState(prevState =>{
//     // //   return{
//     // //     places:prevState.places.filter((places,index) => {
//     // //       return places.key!==id
//     // //     })
//     // //   }
//     // // })
//   }

//   placeDeletedHandler = ()=>{

    
//     this.props.onDeletePlace();
//   //   this.setState(prevState =>{
//   //     return{
//   //       places:prevState.places.filter((places,index) => {
//   //         return places.key!==prevState.selectedPlace.key
//   //       }),
//   //       selectedPlace: null,
//   //     }

//   // })
//   }

//   modalClosedHandler = ()=>{

//     this.props.onDeselectPlace();
//     // this.setState({
//     //   selectedPlace:null
//     // });
//   }


//   render() {
   
//     return (
//       <View style={styles.container}>

//         <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} 
//         onModalClose={this.modalClosedHandler} />
//         <PlaceInput  submitChangeFunction={this.placeSubmitHandler}/>

//         {/* <Image style={{width:370 , height:200}}
//         source={{uri: "https://media.timeout.com/images/100634027/630/472/image.jpg"}} /> */}

//         <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>



//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 100,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
  
// });

// const mapStateToProps = state =>{

//   return{
//     places:state.places.places,
//     selectedPlace:state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch =>{

//   return{

//     onAddPlace: (name) =>{dispatch(addPlace(name))},
//     onDeletePlace: () =>{dispatch(deletePlace())},
//     onSelectPlace: (id)=>{dispatch(selectPlace(id))},
//     onDeselectPlace: ()=>{dispatch(deselectPlace())},
//   }
// }

// export default connect(mapStateToProps , mapDispatchToProps)(App);

