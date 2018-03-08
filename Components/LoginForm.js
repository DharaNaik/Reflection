import React, { Component } from 'react'
import { Text,TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, 
    StatusBar, StyleSheet } from 'react-native'



export default class extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <StatusBar barStyle='light-content'/> 
                <View style={styles.inlineView}> 
                <TextInput style={styles.input}
                    placeholder='Enter UserName/Email' placeholderTextColor='#EF5E35'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}/>
                <TextInput style={styles.input}
                    placeholder='Enter Password' 
                    placeholderTextColor='#EF5E35'
                    secureTextEntry={true}
                    returnKeyType="go" 
                    ref={(input) => this.passwordInput = input} />
                </View>
                <TouchableOpacity style={styles.buttonContainer}> 
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
        </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
      padding : 20
      
    },
    input: {
        height : 40,
        backgroundColor:'rgba(255,255,255,0.9)',
        width : 250,
        marginBottom : 10,
        borderRadius:5,
        justifyContent: 'center',
        color:'#EF5E35',
        fontSize:15,
        paddingHorizontal:10,
        fontFamily:'Avenir-MediumOblique'
    },

    inlineView: {
        marginTop : 40
    },

    buttonContainer:{
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderWidth:1,
        borderRadius:5,
        borderColor:'white',
        paddingVertical:8,

    },

    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontSize:20,
        marginTop:5,
        fontWeight:'700',
        fontFamily:'Academy Engraved LET'
    }

  });