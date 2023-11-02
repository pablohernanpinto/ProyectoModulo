import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import InputText from './elements/inputText';
import { SelectList } from 'react-native-dropdown-select-list';
import Uno from './recuadros/Uno';
import Dos from './recuadros/Dos'

export default function REBRP61COMP() {
    const [checkBoxStates, setCheckBoxStates] = useState([false, false]);
    const [text, onChangeText] = React.useState('');
    const [text1, onChangeText1] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [text3, onChangeText3] = React.useState('');
    const [text4, onChangeText4] = React.useState('');
    const [text5, onChangeText5] = React.useState('');
    const [text6, onChangeText6] = React.useState('');
    const [text7, onChangeText7] = React.useState('');
    const [text8, onChangeText8] = React.useState('');

    const elementosizq2 = ['JCManzana','JCPera','JCFrambuesa','JCDurazno','Aroma','Manz Cloudy','JCFrutilla'];
    const elementosDer2 = ['JCCiruelas secas','JCUva','JCCiruela','Pasta Tomate','Pulpa Manzana','Pulpa Durazno'];
    const elementosIzq3 = ['51,8','52','53,7','54,7','55','60','300','Flexi','Otro'];

    const elementosFinal  = ['REVISION PESO ETIQUETA DE ENVASADO', 'REVISION FECHA ETIQUETA DE ENVASADO']


  return (
    <View>
          <View style = {styles.Container}>
            <Uno></Uno>
          </View>

          <View style = {styles.Container}>
            <Dos></Dos>
          </View>
      
    </View>




  )}

  const styles = StyleSheet.create({
    Container: {
      flex:1,
    },
    containerDrop:{
      paddingLeft: 10,
    },
    
    firstContainer:{
        borderWidth:1,
        width:'97%',
        margin:"1.5%"
    },
    


    box:{
        backgroundColor:'white',
        width: '95%',


    },
    titulo: {
      fontWeight: 'bold', 
      fontSize: 17,
      paddingLeft:'1%',
      paddingBottom: 10,
      paddingRight:4,
    },

    inputOtros: {
      width: "90%",
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius:10,
      borderColor:'red',
    },
    selectList:{
      backgroundColor:'white',
      width: '95%',
    }
  });