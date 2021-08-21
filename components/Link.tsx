
import React from 'react'
import { StyleSheet, View,Text, Button } from 'react-native'

export interface Link{
    titulo:string
    key:string
    hora:string
}


interface LinkProps {
    link:Link
}

export const Link: React.FC<LinkProps> = ({link}) => {
        return (
            <View style={styles.body}>
                <View style={styles.text}>
                    <Text>{link.titulo}</Text>
                    <Text>{link.hora}</Text>
                </View>
                <Button title="Abrir" onPress={()=> ''}/>
            </View>
        )
}

const styles = StyleSheet.create({
    body:{
        padding:20,
        width:300,
        height:100,
        elevation:10,
        backgroundColor:'#f5f6fa',
        margin:10,
        borderRadius:10
    },
    text:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    }
})