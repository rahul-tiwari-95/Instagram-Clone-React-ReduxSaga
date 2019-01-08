import {ADD_PLACE , DELETE_PLACE , SELECT_PLACE} from '../actions/actionTypes'

const initState={
    places:[],
    selectedPlace:null,
    placeName:''
}

//declaring ActionTypes

const reducer = (state=initState , action)=>{

    switch(action.type){

        case ADD_PLACE:
        return {
            ...state,
            places: state.places.concat(
                {  key:Math.random(),
                   name: action.placeName,
                   image: {
                     uri: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_60/fetchdata13/images/99/15/2f/99152f8531885c0a7a1066cd4752436d.jpg"
                   }
                  })


        }

        case DELETE_PLACE:
        return{
            ...state,
            places:state.places.filter((place,index) => {
                return place.key!==action.placeKey
              })

        }

        case SELECT_PLACE:
        return {
            ...state,
            selectedPlace:state.places.find(place=>{
                return place.key===action.placeKey;
              })

        }

        // case DESELECT_PLACE:
        // return{
        //     ...state,
        //     selectedPlace:null

        // }





        default:
        return state;
    }
};

export default reducer;