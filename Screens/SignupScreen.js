import React, { Component } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity} from 'react-native';
import {Container, Content, Header, Button, Label, Form, Item, Input, Spinner} from 'native-base';
import * as firebase from 'firebase';

class SignupScreen extends Component {

    constructor(props){
        super(props)
        this.state=({
            email:'',
            password:'',
            error:''
        })
    }

    signupUser = (email, password) => {
        try{
            if(this.state.password.length<8){
                this.setState({error:"Your password should contain at least 8 characters."});
                return;
            }
            this.setState({error:'',isLoading:true,});
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(this.onSignupSuccess.bind(this));

        }
        catch(error){
            this.setState({error:error.toString(),email:'',password:'',isLoading:false});
            console.log(error.toString());
        }
    }

    onSignupSuccess(){
        this.setState({error:'',isLoading:false});
        this.props.navigation.navigate("HomeScreen");
    }

    onButtonPress(){
        if(this.state.isLoading){
           return <Spinner color={"red"}/>
        }
        return(
            <TouchableOpacity>
                <Button
                    style={{marginTop:10}}
                    full
                    rounded
                    primary
                    onPress={()=>this.signupUser(this.state.email,this.state.password)}>
                    <Text style={{color:'white'}}>Create an account</Text>
                </Button>
            </TouchableOpacity>
        );
    }

    static navigationOptions = {
        title: 'SMARTest Signup Page',
    };

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
                        {this.onButtonPress()}
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

export default SignupScreen;
