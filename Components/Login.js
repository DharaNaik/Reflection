import React, { Component } from 'react'
import { Text,TextInput, View, Image, StyleSheet } from 'react-native'
import LoginForm from './LoginForm'



export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View  style={styles.logoContainer}>
                 </View>
                 <LoginForm />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },

    inlineView : {
        flexGrow: 1,
        alignItems : 'center',
        justifyContent: 'center',
       marginTop:10,
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
        backgroundColor: 'red',
        borderRadius:10,
        borderColor:'white'
      },

    welcome: {
      fontSize: 40,
      textAlign: 'center',
      color: 'white',
      margin: 40,
      fontFamily : 'Academy Engraved LET'

    },
    instructions: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
      margin: 40,
      fontFamily: 'Academy Engraved LET'
    },  


    logoContainer:{
        flexGrow: 1,
        alignItems : 'center',
        justifyContent: 'center',
        marginTop:170,
        marginBottom:170,
        marginRight:50,
        marginLeft:50,
        backgroundColor: '#EF5E35',
        borderRadius:10

    },

    logo:{
        height:200,
        width:200,
        borderRadius:100,

    }
  });