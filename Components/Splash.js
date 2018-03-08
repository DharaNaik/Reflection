import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import LoginForm from './LoginForm'




export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.welcome}>
                        Reflection
                    </Text>
                    <Image style={styles.logo} 
                    source={require('../Public/grace-hopper-academy.jpg')}
                    />
                    <LoginForm />
                    <Text style={styles.instructions}>
                        Welcome to Reflection
                        Reflect your mood today !!
                    </Text>
                 </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EF5E35',
    },

    inlineView : {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        margin:10
    },

    logo:{
        height:200,
        width:200,
        borderRadius:100,

    }


  });