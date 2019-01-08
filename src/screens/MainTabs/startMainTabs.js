import {Navigation} from 'react-native-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

const startTabs = ()=>{

    Promise.all(
        [
            Icons.getImageSource("ios-navigate" , 30),
            Icons.getImageSource("ios-add" , 30),
            Icons.getImageSource("ios-menu" , 30)

        ]
    ).then((imgSource) =>{
        Navigation.startTabBasedApp({

            tabs:[
               
                {
                    screen:"GullyBoy-SharePlace",
                    label:"Share",
                    title: "Share Title",
                    icon:imgSource[1],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:imgSource[2],
                                title:"Menu",
                                id:"Side-Drawer-ID"
                            }
                        ]
                    }
                },
                {
                    screen:"GullyBoy-FindPlace",
                    label:"Find",
                    title: "Find Title",
                    icon:imgSource[0],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:imgSource[2],
                                title:"Menu",
                                id:"Side-Drawer-ID"
                            }
                        ]
                    }
                }
            ],
            drawer:{
                left:{
                    screen:"GullyBoy-SideDrawer"
                }
            }
        })
    })



  


   

}


export default startTabs;