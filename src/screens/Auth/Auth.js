import React , {Component} from 'react';
import {View , Text , Button , TextInput , StyleSheet , ImageBackground , KeyboardAvoidingView} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import Input from '../../../src/components/UI/Input/Input'
import ButtonBG from '../../components/UI/ButtonBG/ButtonBG'



class AuthScreen extends Component {

    state={
        controls:{
            email:{
                value:'',
                valid: false,
                validationRules:{
                    isEmail:true
                }
            },
            password:{
                value:'',
                valid: false,
                validationRules:{
                    minLength:6
                }

            },
            confirmPassword:{
                value:'',
                valid: false,
                validationRules:{
                    equalTo:'password'
                }

            }
        }
    }

    loginHandler=()=>{
        //Code for Authenticating Log-in
        startMainTabs();
    }

    render(){
        return (
                <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
                {/* <ImageBackground source={backgroundImage} style={styles.backgroundImage}> */}
                    <Text style={{   textAlign:'center' , fontSize:50  }} >
                        Miranda 

                    </Text>
                    <Text style={{textAlign:'center' , fontSize:20}}>
                    Powered Redux Saga

                    </Text>
                
                <View style={styles.container}>
                    
                    <Button title="Switch to Log-in"></Button>
                    <Input placeholder="Your E-Mail Address" 
                    keyboardType='email-address'
                    />
                    <Input placeholder="Password"
                    secureTextEntry
                    />
                    <Input placeholder="Confirm Password"/>
                    <Button title="Sign Up" onPress={this.loginHandler}/>
                    <ButtonBG color="#ADD8E6" onPress={()=>alert("Rahul")}>Try me!</ButtonBG>
                    {/* <Button success><Text> Hello</Text></Button> */}

                </View>
                {/* </ImageBackground> */}
                </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    container:{
        // borderColor: "red",
        // borderWidth: 2,
        flex:1,
        justifyContent:"center", //Works in repsect to the FlexBoard Direction
        alignItems: 'center', //Works in repsect to the main axis on the Cross-Axis,

    },
    backgroundImage:{
        width:'100%',
        flex:1
    }
})

export default AuthScreen;

//Just the code. Now importing of Navigation functionalities.
