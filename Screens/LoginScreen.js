import React, { Component } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity} from 'react-native';
import {Container, Content, Header, Button, Label, Form, Item, Input, Spinner} from 'native-base';
import * as firebase from 'firebase';





 class LoginScreen extends Component {

     constructor(props){
         super(props)
         this.state=({
             email:'',
             password:'',
             error:'',
             isLoading:false
         })
     }

     loginUser = (email, password) =>{
         try{
             this.setState({error:"",isLoading:true});
             firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                 .then(this.onLoginSuccess.bind(this));
         }
         catch(error){
             this.setState({isLoading:false});
           //  this.setState({error:"Authentication Failed: Incorrect username or password."});
             this.setState({error:error.toString()});
             console.log(error.toString());
         }

     }

     onLoginSuccess(){
         this.props.navigation.navigate('HomeScreen');
         this.setState({
             email:'',
             password:'',
             isLoading:false,
             error:''
         })
     }


     static navigationOptions = {
         title: 'SMARTest Login Page',
     };

     renderButton(){
         if(this.state.isLoading){
             return < Spinner color={"red"}/>;
         }
         return(
             <View>
             <TouchableOpacity>
                 <Button
                     style={{marginTop:10}}
                     full
                     rounded
                     success
                     onPress={()=> this.loginUser(this.state.email,this.state.password)}
                 >
                     <Text>Log in</Text>
                 </Button>
             </TouchableOpacity>
             <TouchableOpacity>
                <Button
                     style={{marginTop:10}}
                     full
                     rounded
                     primary
                     onPress={()=>this.props.navigation.navigate('SignupScreen')}
                 >
                    <Text style={{color:'white'}}>Don't have an Account?</Text>
                 </Button>
            </TouchableOpacity>
             </View>

         );
     }
     render() {
         return (
             <Container style={styles.container}>
                 <Form>
                     <Item floatingLabel>
                         <Label>Email</Label>
                         <Input
                             autoCorrect={false}
                             onChangeText={(email)=>this.setState({email})}
                         />
                     </Item>
                     <Item floatingLabel>
                         <Label>Password</Label>
                         <Input
                             secureTextEntry={true}
                             autoCorrect={false}
                             onChangeText={(password)=>this.setState({password})}
                         />
                     </Item>
                     <View>
                         {this.renderButton()}

                     <Text style={styles.errorText}>
                         {this.state.error}
                     </Text>
                     </View>
             </Form>
             </Container>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:"#fff",
         padding:10,
         justifyContent:"center"
     },
     errorText:{
         fontSize:13,
         alignSelf:"center",
         color:'red'
     }
     })






          /*  <View>




       <Text style={styles.bigblue}>                Welcome to SmartTest!</Text>
       <Text style={styles.bigblue}>Please Login below with your correct credentials</Text>

              <Button onPress= {() => this.props.navigation.navigate ('HomeScreen')}
                title="User Login"/>
                <Button onPress= {() => this.props.navigation.navigate ('GuestTestSelection')}
                  title="Guest Login"/>
            </View>
          );
        }
      }
      const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },

  red: {
    color: 'red',
  },
});
                    */
  export default LoginScreen;





/*
import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button} from 'react-native';





 class LoginScreen extends Component {
  render() {
    return (

            <View>


              <Text> This is Michael Okrah Login Screen </Text>
              <Button onPress= {() => this.props.navigation.navigate ('HomeScreen')}
                title="Go to homescreen"/>
            </View>
          );
        }
      }

  export default LoginScreen;




*/
