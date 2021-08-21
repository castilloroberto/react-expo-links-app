import React from 'react'
import { View,Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AppNavProps } from './AppParamList'
import { AsyncStorage } from 'react-native'

export function Create({navigation,route}:AppNavProps<'Create'>) {
    return(
        <View style={styles.body}>

            <View>
                <Text style={styles.titulo}> Titulo</Text>
                <TextInput placeholder="Matematicas" style={styles.input}/>

            </View>

            <View>
                <Text style={styles.titulo}>Link</Text>
                <TextInput  placeholder="https://zoom.us/j/93092188971" style={styles.input}/>
                
            </View>

            <View>
                <Text style={styles.titulo}>Hora</Text>
                <TextInput placeholder="3:00PM" style={styles.input}/>

                <Button title="Guardar" onPress={()=>''}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    titulo:{
        textAlign:'left',
        fontWeight:'bold',
        marginBottom:2
    },
    input:{
        backgroundColor:'white',
        padding:10,
        marginBottom:10,
        borderRadius:5
    }
})