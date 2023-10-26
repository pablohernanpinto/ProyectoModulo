import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


export default function InputText({nombre,ancho}){
    const [text, onChangeText] = React.useState('');

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.styText, { width: ancho, textAlign: 'left' }]}>{nombre}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Escribe aquí...   "
          placeholderTextColor="#a9a9a9"
        />
      </View> 
    )
}


const styles = StyleSheet.create({
    input: {
      backgroundColor:'white',
      borderWidth: 1,
    },
    styText:{
      paddingRight:4,
      fontSize: 15,
    },
  });
  