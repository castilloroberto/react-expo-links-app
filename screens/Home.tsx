import React from 'react';

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from '../components/Link';
import { AppNavProps } from './AppParamList';



let links:Link[] =[
  {
    titulo:'Ingles',
    key:'https://unicah.edu/',
    hora:'9:00AM'
  },
  {
    titulo:'Programacion Multi',
    key:'https://expo.io/',
    hora:'1:00PM'
  },
  {
    titulo:'Sistemas automatizados',
    key:'https://flatuicolors.com/',
    hora:'3:00PM'
  },
  {
    titulo:'Redes II',
    key:'https://www.youtube.com/',
    hora:'5:00PM'
  },
] 

export default function Home({navigation,route}:AppNavProps<'Home'>) {
  return (
    <View style={styles.container}>

      <FlatList
        renderItem={({item})=><Link link={item}></Link>} 
        data={links} >



      </FlatList>
      <TouchableOpacity
        onPress={ ( )=> navigation.navigate('Create')} 
        style={styles.add}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add:{
    position:'absolute',
    bottom:20,
    right:20,
    width:40,
    height:40,
    backgroundColor:'#0984e3',
    borderRadius:100,
    padding:10,
    alignItems:'center',
    justifyContent:'center'
  },
  addText:{
    color:'white',
    fontSize:20
  }
});